import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { resetPassword, confirmResetPassword, signIn, signUp, resendSignUpCode, confirmSignUp, resend } from 'aws-amplify/auth';
import { Alert } from 'react-native';


export default function AuthScreen({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [verificationCode, setVerificationCode] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [isConfirmSignUp, setIsConfirmSignUp] = useState(false);

  const handleForgotPassword = async () => {
    try {
      if (!username) {
        Alert.alert(
          'Missing Information',
          'Please enter your email first.',
          [{ text: 'OK' }]
        );
        return;
      }
      await resetPassword({ username });
      Alert.alert(
        'Check Your Email',
        'A password reset code has been sent to your email.'
      );
    } catch (error) {
      console.error('Error requesting password reset:', error);
      Alert.alert(
        'Error',
        'Unable to request a password reset. Please try again later.'
      );
    }
  };

  // Step 2: Confirm new password
  const handleConfirmPassword = async () => {
    try {
      await confirmResetPassword({
        username,
        confirmationCode: verificationCode,
        newPassword,
      });

      console.log('Password reset successfully. You can now sign in.');

      // Use Alert for success notification
      Alert.alert(
        'Success',
        'Password reset successfully! Please sign in with your new password.',
        [{ text: 'OK', onPress: () => setIsForgotPassword(false) }]
      );

      setIsSignIn(true);
    } catch (error) {
      console.error('Error resetting password:', error);

      // Use Alert for error notification
      Alert.alert(
        'Error',
        'Error resetting password. Please check your code and try again.',
        [{ text: 'OK' }]
      );
    }
  };

  // Handle Sign-In
  const handleSignIn = async () => {
    try {
      const user = await signIn({ username, password });
      console.log('Signed in successfully:', user);

      // Show success alert
      Alert.alert(
        'Success',
        'Signed in successfully!',
        [{ text: 'OK', onPress: () => onSignIn(user) }]
      );
    } catch (error) {
      console.error('Error signing in:', error);

      // Show error alert
      Alert.alert(
        'Sign-In Failed',
        'Error signing in. Please check your credentials and try again.',
        [{ text: 'OK' }]
      );
    }
  };


  // Handle Sign Up
  const handleSignUp = async () => {
    try {
      const result = await signUp({
        username,
        password,
      });
      console.log('Sign up success:', result);
      setIsSignUp(false); // Move to confirmation screen
      setIsConfirmSignUp(true);
    } catch (error) {
      if ((error as Error).name === 'UsernameExistsException') {
        Alert.alert(
          'Account Exists',
          'This account already exists but is not confirmed. A new code will be sent.',
          [
            {
              text: 'OK',
              onPress: async () => {
                await resendSignUpCode({username}); // Resend confirmation code
                setIsSignUp(false);
                setIsConfirmSignUp(true);
              },
            },
          ]
        );
      } else {
        console.error('Error signing up:', error);
        Alert.alert('Sign Up Error', (error as Error).message || 'Something went wrong.');
      }
    }
  };

  const handleResendCode = async () => {
    try {
      if (!username) {
        Alert.alert('Error', 'Please provide your email address.');
        return;
      }
  
      await resendSignUpCode({
        username, // Pass the email or username
      });
      Alert.alert('Code Sent', 'A new verification code has been sent to your email.');
    } catch (error) {
      console.error('Error resending code:', error);
      Alert.alert('Resend Failed', (error as Error).message || 'Failed to resend verification code.');
    }
  };

  // Handle Confirm Sign Up
  const handleConfirmSignUp = async () => {
    if (!username) {
      Alert.alert('Error', 'Please provide your email address.');
      return;
    }
  
    try {
      await confirmSignUp({
        username, // The email or username
        confirmationCode: verificationCode, // The verification code input
      });
      Alert.alert('Success', 'Sign up confirmed! Please sign in.');
      setIsConfirmSignUp(false);
      setIsSignIn(true);
    } catch (error) {
      console.error('Error confirming sign-up:', error);
      Alert.alert('Confirmation Error', (error as Error).message || 'Failed to confirm sign-up.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isForgotPassword
          ? 'Reset Password'
          : isSignIn
            ? 'Sign In'
            : isSignUp
              ? 'Sign Up'
              : 'Confirm Sign Up'}
      </Text>

      {/* Common Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
        keyboardType="email-address"
      />

      {isForgotPassword ? (
        // Forgot Password Workflow
        <>
          <TextInput
            style={styles.input}
            placeholder="Verification Code"
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
          />
          <Button title="Confirm Reset Password" onPress={handleConfirmPassword} />
          <Button title="Back to Sign In" onPress={() => setIsForgotPassword(false)} />
        </>
      ) : isSignUp ? (
        // Sign-Up Workflow
        <>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Sign Up" onPress={handleSignUp} />
          <Button title="Already have an account? Sign In" onPress={() => setIsSignUp(false)} />
        </>
      ) : isConfirmSignUp ? (
        // Confirm Sign-Up Workflow
        <>
          <TextInput
            style={styles.input}
            placeholder="Verification Code"
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="number-pad"
          />
          <Button title="Confirm Sign Up" onPress={handleConfirmSignUp} />

          <Button
            title="Back to Sign Up"
            onPress={() => {
              setIsSignUp(true);
              setIsConfirmSignUp(false);
            }}
          />

          <Button
            title="Resend Code"
            onPress={handleResendCode}
          />
        </>
      ) : (
        // Sign-In Workflow
        <>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Sign In" onPress={handleSignIn} />
          <Button title="Sign Up" onPress={() => setIsSignUp(true)} />
          <Button
            title="Forgot Password?"
            onPress={() => {
              setIsForgotPassword(true);
              handleForgotPassword();
            }}
          />

        </>
      )}
    </View>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

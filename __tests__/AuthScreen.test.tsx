import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import AuthScreen from '../components/AuthScreen';
import {
  resetPassword,
  confirmResetPassword,
  signIn,
  signUp,
  resendSignUpCode,
  confirmSignUp,
} from 'aws-amplify/auth';

describe('AuthScreen', () => {
  const mockOnSignIn = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Sign In workflow and handles Sign In', async () => {
    (signIn as jest.Mock).mockResolvedValueOnce({ username: 'testuser' });

    const { getByPlaceholderText, getByText } = render(<AuthScreen onSignIn={mockOnSignIn} />);

    // Simulate entering username and password
    fireEvent.changeText(getByPlaceholderText('Email'), 'testuser@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');

    // Simulate Sign In button press
    fireEvent.press(getByText('Sign In'));

    // Wait for the sign-in to resolve
    await waitFor(() => {
      expect(mockOnSignIn).toHaveBeenCalledWith({ username: 'testuser' });
    });

    // Ensure signIn was called with correct arguments
    expect(signIn).toHaveBeenCalledWith({
      username: 'testuser@example.com',
      password: 'password123',
    });
  });

  test('renders Sign Up workflow and handles Sign Up', async () => {
    signUp.mockResolvedValueOnce({ userSub: 'testuser-id' });

    const { getByPlaceholderText, getByText } = render(
      <AuthScreen onSignIn={mockOnSignIn} />
    );

    fireEvent.press(getByText('Sign Up')); // Switch to Sign Up workflow
    fireEvent.changeText(getByPlaceholderText('Email'), 'newuser@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'newpassword');
    fireEvent.press(getByText('Sign Up'));

    await waitFor(() => expect(signUp).toHaveBeenCalled());
    expect(signUp).toHaveBeenCalledWith({
      username: 'newuser@example.com',
      password: 'newpassword',
    });
  });

  test('handles Resend Code in Sign Up confirmation', async () => {
    resendSignUpCode.mockResolvedValueOnce();

    const { getByPlaceholderText, getByText } = render(
      <AuthScreen onSignIn={mockOnSignIn} />
    );

    fireEvent.press(getByText('Sign Up'));
    fireEvent.press(getByText('Already have an account? Sign In')); // Simulate incomplete sign up
    fireEvent.press(getByText('Resend Code'));

    await waitFor(() => expect(resendSignUpCode).toHaveBeenCalled());
    expect(resendSignUpCode).toHaveBeenCalledWith({
      username: '',
    });
  });

  test('handles Confirm Sign Up', async () => {
    confirmSignUp.mockResolvedValueOnce();

    const { getByPlaceholderText, getByText } = render(
      <AuthScreen onSignIn={mockOnSignIn} />
    );

    fireEvent.press(getByText('Sign Up')); // Switch to Sign Up workflow
    fireEvent.press(getByText('Already have an account? Sign In')); // Simulate incomplete sign up
    fireEvent.changeText(getByPlaceholderText('Verification Code'), '123456');
    fireEvent.press(getByText('Confirm Sign Up'));

    await waitFor(() => expect(confirmSignUp).toHaveBeenCalled());
    expect(confirmSignUp).toHaveBeenCalledWith({
      username: '',
      confirmationCode: '123456',
    });
  });

  test('handles Forgot Password', async () => {
    resetPassword.mockResolvedValueOnce();

    const { getByPlaceholderText, getByText } = render(
      <AuthScreen onSignIn={mockOnSignIn} />
    );

    fireEvent.press(getByText('Forgot Password?'));
    fireEvent.changeText(getByPlaceholderText('Email'), 'forgotuser@example.com');
    fireEvent.press(getByText('Confirm Reset Password'));

    await waitFor(() => expect(resetPassword).toHaveBeenCalled());
    expect(resetPassword).toHaveBeenCalledWith({
      username: 'forgotuser@example.com',
    });
  });

  test('handles Confirm Reset Password', async () => {
    confirmResetPassword.mockResolvedValueOnce();

    const { getByPlaceholderText, getByText } = render(
      <AuthScreen onSignIn={mockOnSignIn} />
    );

    fireEvent.press(getByText('Forgot Password?'));
    fireEvent.changeText(getByPlaceholderText('Email'), 'resetuser@example.com');
    fireEvent.changeText(getByPlaceholderText('Verification Code'), '654321');
    fireEvent.changeText(getByPlaceholderText('New Password'), 'newpassword');
    fireEvent.press(getByText('Confirm Reset Password'));

    await waitFor(() => expect(confirmResetPassword).toHaveBeenCalled());
    expect(confirmResetPassword).toHaveBeenCalledWith({
      username: 'resetuser@example.com',
      confirmationCode: '654321',
      newPassword: 'newpassword',
    });
  });
});
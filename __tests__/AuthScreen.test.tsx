

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
} from '@aws-amplify/auth';

test('placeholder test', () => {
  expect(true).toBe(true);
});


// jest.mock('@aws-amplify/auth');

// describe('AuthScreen', () => {
//   const mockOnSignIn = jest.fn();

//   jest.mock('@aws-amplify/auth', () => ({
//     signUp: jest.fn(),
//     resendSignUpCode: jest.fn(),
//     confirmSignUp: jest.fn(),
//     resetPassword: jest.fn(),
//     confirmResetPassword: jest.fn(),
//   }));



//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test('renders Sign In workflow and handles Sign In', async () => {
//     (signIn as jest.Mock).mockResolvedValueOnce({ username: 'testuser' });

//     const { getByPlaceholderText, getByText } = render(<AuthScreen onSignIn={mockOnSignIn} />);

//     // Simulate entering username and password
//     fireEvent.changeText(getByPlaceholderText('Email'), 'testuser@example.com');
//     fireEvent.changeText(getByPlaceholderText('Password'), 'password123');

//     // Simulate Sign In button press
//     fireEvent.press(getByText('Sign In'));

//     // Wait for the sign-in to resolve
//     await waitFor(() => {
//       expect(mockOnSignIn).toHaveBeenCalledWith({ username: 'testuser' });
//     });

//     // Ensure signIn was called with correct arguments
//     expect(signIn).toHaveBeenCalledWith({
//       username: 'testuser@example.com',
//       password: 'password123',
//     });
//   });


//   test('renders Sign Up workflow and handles Sign Up', async () => {
//     // Type assertion to make mockResolvedValueOnce available
//     (signUp as jest.Mock).mockResolvedValueOnce({ userSub: 'testuser-id' });

//     const { getByPlaceholderText, getByText } = render(
//       <AuthScreen onSignIn={mockOnSignIn} />
//     );

//     // Switch to Sign Up workflow
//     fireEvent.press(getByText('Sign Up'));
//     fireEvent.changeText(getByPlaceholderText('Email'), 'newuser@example.com');
//     fireEvent.changeText(getByPlaceholderText('Password'), 'newpassword');
//     fireEvent.press(getByText('Sign Up'));

//     // Wait for the async signUp function to be called
//     await waitFor(() => expect(signUp).toHaveBeenCalledTimes(1));
//     expect(signUp).toHaveBeenCalledWith({
//       username: 'newuser@example.com',
//       password: 'newpassword',
//     });
//   });


//   test('handles Resend Code in Sign Up confirmation', async () => {
//     // Mock the function to resolve successfully
//     (resendSignUpCode as jest.Mock).mockResolvedValueOnce(undefined);

//     const { getByPlaceholderText, getByText } = render(
//       <AuthScreen onSignIn={mockOnSignIn} />
//     );

//     // Simulate entering the email and requesting Resend Code
//     fireEvent.changeText(getByPlaceholderText('Email'), 'testuser@example.com');
//     fireEvent.press(getByText('Sign Up')); // Switch to Sign-Up workflow
//     fireEvent.press(getByText('Resend Code'));

//     // Wait for resendSignUpCode to be called
//     await waitFor(() => expect(resendSignUpCode).toHaveBeenCalledTimes(1));
//     expect(resendSignUpCode).toHaveBeenCalledWith({
//       username: 'testuser@example.com',
//     });
//   });

//   test('handles Confirm Sign Up', async () => {
//     // Type assertion for Jest mock
//     (confirmSignUp as jest.Mock).mockResolvedValueOnce(undefined);

//     const { getByPlaceholderText, getByText } = render(
//       <AuthScreen onSignIn={mockOnSignIn} />
//     );

//     // Simulate user input and confirmation
//     fireEvent.press(getByText('Sign Up')); // Navigate to Sign-Up
//     fireEvent.changeText(getByPlaceholderText('Email'), 'testuser@example.com');
//     fireEvent.changeText(getByPlaceholderText('Verification Code'), '123456');
//     fireEvent.press(getByText('Confirm Sign Up'));

//     // Verify the function was called with the correct arguments
//     await waitFor(() => expect(confirmSignUp).toHaveBeenCalledTimes(1));
//     expect(confirmSignUp).toHaveBeenCalledWith({
//       username: 'testuser@example.com',
//       confirmationCode: '123456',
//     });
//   });

//   test('handles Forgot Password', async () => {
//     // Ensure TypeScript recognizes `resetPassword` as a Jest mock
//     (resetPassword as jest.Mock).mockResolvedValueOnce(undefined);

//     const { getByPlaceholderText, getByText } = render(
//       <AuthScreen onSignIn={mockOnSignIn} />
//     );

//     // Simulate user interaction for Forgot Password
//     fireEvent.press(getByText('Forgot Password?'));
//     fireEvent.changeText(getByPlaceholderText('Email'), 'forgotuser@example.com');
//     fireEvent.press(getByText('Confirm Reset Password'));

//     // Wait for `resetPassword` to be called and assert correct arguments
//     await waitFor(() => expect(resetPassword).toHaveBeenCalledTimes(1));
//     expect(resetPassword).toHaveBeenCalledWith({ username: 'forgotuser@example.com' });
//   });


//   test('handles Confirm Reset Password', async () => {
//     // Ensure TypeScript recognizes `confirmResetPassword` as a Jest mock
//     (confirmResetPassword as jest.Mock).mockResolvedValueOnce(undefined);

//     const { getByPlaceholderText, getByText } = render(
//       <AuthScreen onSignIn={mockOnSignIn} />
//     );

//     // Simulate the Forgot Password flow
//     fireEvent.press(getByText('Forgot Password?'));
//     fireEvent.changeText(getByPlaceholderText('Email'), 'resetuser@example.com');
//     fireEvent.changeText(getByPlaceholderText('Verification Code'), '654321');
//     fireEvent.changeText(getByPlaceholderText('New Password'), 'newpassword');
//     fireEvent.press(getByText('Confirm Reset Password'));

//     // Verify the `confirmResetPassword` function was called
//     await waitFor(() => expect(confirmResetPassword).toHaveBeenCalledTimes(1));
//     expect(confirmResetPassword).toHaveBeenCalledWith({
//       username: 'resetuser@example.com',
//       confirmationCode: '654321',
//       newPassword: 'newpassword',
//     });
//   });
  
// });
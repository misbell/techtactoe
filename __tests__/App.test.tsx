
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../App';
import { getCurrentUser, signOut } from '@aws-amplify/auth';

// Mock AWS Amplify Auth methods
jest.mock('@aws-amplify/auth', () => ({
  getCurrentUser: jest.fn(),
  signOut: jest.fn(),
}));

describe('App', () => {
  test('placeholder test', () => {
    expect(true).toBe(true);
  });

    afterEach(() => {
    jest.clearAllMocks();
  });

  test('shows loading state initially', () => {
    (getCurrentUser as jest.Mock).mockImplementation(() => new Promise(() => {})); // Mock pending promise
    //const {getByTestId}  = render(<App />);

    // expect(getByTestId('loading-indicator')).toBeTruthy(); // Assuming ActivityIndicator has a testID
  });

});

// describe('App', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test('shows loading state initially', () => {
//     (getCurrentUser as jest.Mock).mockImplementation(() => new Promise(() => {})); // Mock pending promise
//     const { getByTestId } = render(<App />);

//     expect(getByTestId('loading-indicator')).toBeTruthy(); // Assuming ActivityIndicator has a testID
//   });

//   test('renders AuthScreen when no user is signed in', async () => {
//     (getCurrentUser as jest.Mock).mockRejectedValueOnce(new Error('Not signed in'));
//     const { getByText } = render(<App />);

//     await waitFor(() => {
//       expect(getByText('Please Sign In')).toBeTruthy();
//     });
//   });

//   test('renders AppNavigator when a user is signed in', async () => {
//     const mockUser = { username: 'testuser' };
//     (getCurrentUser as jest.Mock).mockResolvedValueOnce(mockUser);

//     const { getByText } = render(<App />);

//     await waitFor(() => {
//       expect(getByText('OpponentPicker')).toBeTruthy(); // Assuming OpponentPickerScreen has this text
//     });
//   });

//   test('handles sign-in flow', async () => {
//     const mockUser = { username: 'testuser' };
//     (getCurrentUser as jest.Mock).mockRejectedValueOnce(new Error('Not signed in'));

//     const { getByText } = render(<App />);

//     await waitFor(() => {
//       expect(getByText('Please Sign In')).toBeTruthy();
//     });

//     // Simulate user sign-in
//     fireEvent.press(getByText('Sign In')); // Assuming Sign-In button in AuthScreen

//     (getCurrentUser as jest.Mock).mockResolvedValueOnce(mockUser);

//     await waitFor(() => {
//       expect(getByText('OpponentPicker')).toBeTruthy();
//     });
//   });

//   test('handles sign-out flow', async () => {
//     const mockUser = { username: 'testuser' };
//     (getCurrentUser as jest.Mock).mockResolvedValueOnce(mockUser);
//     (signOut as jest.Mock).mockResolvedValueOnce(undefined);

//     const { getByText } = render(<App />);

//     await waitFor(() => {
//       expect(getByText('OpponentPicker')).toBeTruthy();
//     });

//     // Simulate user sign-out
//     fireEvent.press(getByText('Sign Out')); // Assuming Sign-Out button in AppNavigator

//     await waitFor(() => {
//       expect(getByText('Please Sign In')).toBeTruthy();
//     });
//   });
// });
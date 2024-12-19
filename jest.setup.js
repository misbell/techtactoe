import '@testing-library/jest-native/extend-expect'; // Extends Jest for React Native

// // Mock AWS Amplify Auth methods
// jest.mock('aws-amplify/auth', () => ({
//   resetPassword: jest.fn(),
//   confirmResetPassword: jest.fn(),
//   signIn: jest.fn(),
//   signUp: jest.fn(),
//   resendSignUpCode: jest.fn(),
//   confirmSignUp: jest.fn(),
// }));

// // Mock `uuid` module
// jest.mock('uuid', () => ({
//   v4: jest.fn(() => 'mock-uuid'),
// }));


// jest.mock('aws-amplify/auth', () => ({
//   signIn: jest.fn(),
//   signUp: jest.fn(),
//   confirmSignUp: jest.fn(),
//   resendSignUpCode: jest.fn(),
//   resetPassword: jest.fn(),
//   confirmResetPassword: jest.fn(),
// }));

// jest.mock('uuid', () => ({
//   v4: jest.fn(() => 'mock-uuid'),
// }));

import '@testing-library/jest-native/extend-expect'; // Extends Jest for React Native

// Mock UUID
jest.mock('uuid', () => ({
    v4: jest.fn(() => 'mock-uuid'),
}));

// Mock AWS Amplify Auth
jest.mock('aws-amplify/auth', () => ({
    getCurrentUser: jest.fn(),
    signOut: jest.fn(),
    resetPassword: jest.fn(),
    confirmResetPassword: jest.fn(),
    signIn: jest.fn(),
    signUp: jest.fn(),
    resendSignUpCode: jest.fn(),
    confirmSignUp: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
    NavigationContainer: ({ children }) => children,
}));

jest.mock('@react-navigation/stack', () => {
    const actualStack = jest.requireActual('@react-navigation/stack');
    return {
        ...actualStack,
        createStackNavigator: jest.fn(() => ({
            Navigator: ({ children }) => children,
            Screen: ({ children }) => children,
        })),
    };
});
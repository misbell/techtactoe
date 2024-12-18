import '@testing-library/jest-native/extend-expect'; // Extends Jest for React Native
jest.mock('aws-amplify/auth', () => ({
  resetPassword: jest.fn(),
  confirmResetPassword: jest.fn(),
  signIn: jest.fn(),
  signUp: jest.fn(),
  resendSignUpCode: jest.fn(),
  confirmSignUp: jest.fn(),
}));

 
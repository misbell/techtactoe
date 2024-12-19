// module.exports = {
//   preset: 'react-native',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   transformIgnorePatterns: [
//     'node_modules/(?!(@react-native|react-native|react-navigation)/)',
//   ],
// };

// module.exports = {
//   preset: 'ts-jest', // Use ts-jest preset
//   testEnvironment: 'node', // Adjust this if you need 'jsdom' for React Native
//   transformIgnorePatterns: [
//     'node_modules/(?!react-native|@react-native|react-navigation|@react-navigation)',
//   ],
//   setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
// };

// module.exports = {
//   preset: 'ts-jest',
//   setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
//   transformIgnorePatterns: [
//     'node_modules/(?!(react-native|@react-native|uuid|@aws-amplify|@testing-library)/)',
//   ],
//   transform: {
//     '^.+\\.js$': 'babel-jest',
//     '^.+\\.ts?$': 'ts-jest',
//   },
//   moduleNameMapper: {
//     '\\.css$': 'identity-obj-proxy',
//   },
// };

// module.exports = {
//   preset: 'react-native',
//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use babel-jest to transform files
//   },
//   transformIgnorePatterns: [
//     'node_modules/(?!(react-native|@react-native|@react-navigation|react-navigation|@react-native-community)/)',
//   ],
//   setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
// };
 

// module.exports = {
//   preset: 'react-native',
//   setupFiles: ['./jest.setup.js'], // Initialize Jest mocks and extensions
//   transformIgnorePatterns: [
//     'node_modules/(?!(react-native|@react-native|@testing-library|uuid|aws-amplify)/)',
//   ],
//   moduleNameMapper: {
//     '^uuid$': require.resolve('uuid'), // Ensure uuid resolves correctly
//   },
//   globals: {
//     __DEV__: true, // React Native assumes this global
//   },
// };

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@testing-library/react-native|uuid)/)',
     'node_modules/(?!(@react-native|react-native|@aws-amplify)/)',
  ],
  testEnvironment: 'node', // Node.js environment for React Native
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};


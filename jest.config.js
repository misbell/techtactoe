// module.exports = {
//   preset: 'react-native',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   transform: {
//     '^.+\\.jsx?$': 'babel-jest',
//     '^.+\\.tsx?$': 'ts-jest',
//   },
//   transformIgnorePatterns: [
//     'node_modules/(?!(react-native|@react-native|@aws-amplify|uuid)/)',
//   ],
//   moduleNameMapper: {
//     '\\.(css|less)$': 'identity-obj-proxy',
//   testEnvironment: 'node',
//   },
// };

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-community|@react-navigation|@aws-amplify|uuid)',
   
  ],
};

//'node_modules/(?!(react-native|@react-native|@aws-amplify|uuid)/)',
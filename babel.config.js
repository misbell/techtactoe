module.exports = {
  presets: [
    'module:metro-react-native-babel-preset', // React Native preset
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // Handles async/await correctly
  ],
};
import { getRandomValues } from 'react-native-get-random-values';
import { Buffer } from 'buffer';

exports.generateChallenge = () => {
  const randomBytes = new Uint8Array(32); // Create an array for random values
  getRandomValues(randomBytes); // Populate it with secure random values
  return Buffer.from(randomBytes).toString('base64'); // Convert to base64 string
};
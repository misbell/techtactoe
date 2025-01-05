/**
 @type {import('@types/aws-lambda').CreateAuthChallengeTriggerHandler}
*/

import { generateChallenge } from './passkeyHandler'; // Utility to generate the challenge

exports.handler = async (event) => {
  console.log('CreateAuthChallenge invoked...');
  console.log('Event:', JSON.stringify(event));

  // Check if the challenge is CUSTOM_CHALLENGE
  if (event.request.session.length === 2 && event.request.challengeName === 'CUSTOM_CHALLENGE') {
    console.log('Handling CUSTOM_CHALLENGE...');

    // Generate a WebAuthn (or other) challenge
    const passkeyChallenge = generateChallenge(); // Utility to create challenge

    // Public parameters sent to the client
    event.response.publicChallengeParameters = {
      challenge: passkeyChallenge, // Challenge for WebAuthn
    };

    // Private parameters stored for server-side validation
    event.response.privateChallengeParameters = {
      passkeyChallenge, // Store generated challenge for later verification
      userId: event.request.userAttributes.sub, // Unique Cognito user ID
    };

    // Metadata to help identify the challenge type
    event.response.challengeMetadata = 'PASSKEY_CHALLENGE';
  } else {
    console.log('Skipping as it is not a CUSTOM_CHALLENGE.');
    event.response.publicChallengeParameters = {};
    event.response.privateChallengeParameters = {};
    event.response.failAuthentication = true; // Fail the flow if it's not a valid CUSTOM_CHALLENGE
  }

  return event;
};


// exports.handler = async (event) => {
//   if (event.request.session.length === 2 && event.request.challengeName === 'CUSTOM_CHALLENGE') {
//     event.response.publicChallengeParameters = { trigger: 'true' };

//     event.response.privateChallengeParameters = {};
//     event.response.privateChallengeParameters.answer = process.env.CHALLENGEANSWER;
//   }
//   return event;
// };


// const { generateChallenge } = require('./passkeyHandler'); // Utility to generate the challenge

// exports.handler = async (event) => {
//   console.log('CreateAuthChallenge invoked...');
//   console.log('Event:', JSON.stringify(event));

//   // Check if this is the first attempt for the challenge
//   if (event.request.session && event.request.session.length > 0) {
//     console.log('Session already exists. Sending "failAuthentication"...');
//     event.response.publicChallengeParameters = {};
//     event.response.privateChallengeParameters = {};
//     event.response.failAuthentication = true;
//     return event;
//   }

//   // Generate a WebAuthn challenge (or similar mechanism)
//   const passkeyChallenge = generateChallenge(); // Generate challenge using utility

//   console.log('Generated challenge:', passkeyChallenge);

//   // Public parameters sent to the client
//   event.response.publicChallengeParameters = {
//     challenge: passkeyChallenge,
//   };

//   // Private parameters stored on the server (not visible to the client)
//   event.response.privateChallengeParameters = {
//     passkeyChallenge,
//     userId: event.request.userAttributes.sub, // Use Cognito User Pool's unique user ID
//   };

//   event.response.challengeMetadata = 'PASSKEY_CHALLENGE';

//   return event;
// };
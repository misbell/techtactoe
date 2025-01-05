const { verifyAuthenticationResponse } = require('@simplewebauthn/server');
const { rpID } = require('./constants'); // Ensure `rpID` matches your app identifier

exports.handler = async (event) => {
  console.log('VerifyAuthChallengeResponse invoked:', event);

  const expectedChallenge = event.request.privateChallengeParameters.challenge;
  const clientResponse = JSON.parse(event.request.challengeAnswer); // Parse the assertion from the client

  try {
    const verification = await verifyAuthenticationResponse({
      response: clientResponse,
      expectedChallenge,
      expectedOrigin: [
        'android:apk-key-hash:<SHA256-key-hash>', // Replace with your Android hash
        'ios:bundle-id:com.prenezsoft.games.techtactoe',  // Replace with your iOS bundle ID
      ],
      expectedRPID: rpID,
    });

    if (verification.verified) {
      console.log('Passkey verification succeeded');
      event.response.answerCorrect = true;
    } else {
      console.log('Passkey verification failed');
      event.response.answerCorrect = false;
    }
  } catch (error) {
    console.error('Error verifying passkey response:', error);
    event.response.answerCorrect = false;
  }

  return event;
};
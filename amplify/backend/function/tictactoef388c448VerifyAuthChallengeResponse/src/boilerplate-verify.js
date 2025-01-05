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
        'android:apk-key-hash:85:BF:3E:DA:D5:D4:B3:26:57:60:91:BB:7B:CA:6D:39:8D:F8:59:5F:72:CE:C9:79:91:79:21:1E:36:5A:5B:AE',
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
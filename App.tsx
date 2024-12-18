import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { Amplify } from 'aws-amplify';
import { getCurrentUser, signOut, AuthUser }  from 'aws-amplify/auth';
import awsconfig from './src/aws-exports';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OpponentPickerScreen from './components/OpponentPickerScreen';
import GameScreen from './components/GameScreen';
import LeaderboardScreen from './components/LeaderboardScreen';
import AuthScreen from './components/AuthScreen'; // AuthScreen handles sign-in

Amplify.configure(awsconfig);

const Stack = createStackNavigator();

function AppNavigator({ user, onSignOut }) {

  const renderSignOutButton = () => (
    <Button title="Sign Out" onPress={onSignOut} />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OpponentPicker">
        <Stack.Screen
          name="OpponentPicker"
          component={OpponentPickerScreen}
          initialParams={{ user }}
          options={{
            headerRight:  renderSignOutButton,
          }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          initialParams={{ user }}
        />
        <Stack.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          initialParams={{ user }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [user, setUser] = useState<AuthUser | null>(null); // User can be AuthUser or null
  const [loading, setLoading] = useState(true); // Loading state while checking auth

  // Check for current authenticated user on app load
  useEffect(() => {
    const checkUser = async () => {
      try {
        const authUser = await getCurrentUser();
        setUser(authUser);
      } catch (error) {
        console.log('No user signed in');
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  // Sign-out function
  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Show AuthScreen if no user is signed in
  if (!user) {
    return <AuthScreen onSignIn={setUser} />;
  }

  // Load the navigation stack for authenticated users
  return <AppNavigator user={user} onSignOut={handleSignOut} />;
}

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
// import { Amplify } from 'aws-amplify';
// import { generateClient } from 'aws-amplify/api'; // Generates a client for Amplify services
// import awsconfig from './src/aws-exports';
 

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import OpponentPickerScreen from './components/OpponentPickerScreen';
// import GameScreen from './components/GameScreen';
// import LeaderboardScreen from './components/LeaderboardScreen';

// Amplify.configure(awsconfig);
// const client = generateClient();

// const Stack = createStackNavigator();

// export function AppNavigator({ onSignOut, user }) {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="OpponentPicker">
//         <Stack.Screen
//           name="OpponentPicker"
//           component={OpponentPickerScreen}
//           initialParams={{ user }}
//         />
//         <Stack.Screen
//           name="Game"
//           component={GameScreen}
//           initialParams={{ user }}
//         />
//         <Stack.Screen
//           name="Leaderboard"
//           component={LeaderboardScreen}
//           initialParams={{ user }}
//         />
//       </Stack.Navigator>

//       <View style={{ padding: 10, alignItems: "center" }}>
//         <Text>Welcome, {user.username}!</Text>
//         <Button title="Sign Out" onPress={onSignOut} />
//       </View>

//     </NavigationContainer>
//   );
// }

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check current authenticated user
//   useEffect(() => {
//     async function fetchUser() {
//       try {
//         const authUser = await Auth.currentAuthenticatedUser();
//         setUser(authUser);
//       } catch (error) {
//         console.log("Not signed in");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchUser();
//   }, []);

//   const handleSignOut = async () => {
//     try {
//       await Auth.signOut();
//       setUser(null);
//     } catch (error) {
//       console.error("Error signing out:", error);
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.loader}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   if (!user) {
//     return <AuthScreen onSignIn={() => setUser(true)} />;
//   }

//   return <AppNavigator onSignOut={handleSignOut} user={user} />;
// }

// function AuthScreen({ onSignIn }) {
//   return (
//     <View style={styles.container}>
//       <Text>Please Sign In</Text>
//       <Button title="Sign In" onPress={() => Auth.federatedSignIn()} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
//   loader: { flex: 1, justifyContent: "center", alignItems: "center" },
//   footer: { padding: 10, alignItems: "center" },
// });
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import GameScreen from './components/GameScreen';
// import OpponentPickerScreen from './components/OpponentPickerScreen';
// import LeaderboardScreen from './components/LeaderboardScreen';

// import {Amplify} from 'aws-amplify';
// import awsconfig from './src/aws-exports';
// Amplify.configure(awsconfig);

// const Stack = createStackNavigator();

// export default function App() {
//   return (

    
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="OpponentPicker">
//         <Stack.Screen name="OpponentPicker" component={OpponentPickerScreen} />
//         <Stack.Screen name="Game" component={GameScreen} />
//         <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


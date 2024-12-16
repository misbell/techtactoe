import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from './components/GameScreen';
import OpponentPickerScreen from './components/OpponentPickerScreen';
import LeaderboardScreen from './components/LeaderboardScreen';

import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OpponentPicker">
        <Stack.Screen name="OpponentPicker" component={OpponentPickerScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import React from 'react';
import { View,Text } from 'react-native';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../constants';

function HomeScreen() {
  return <LinearGradient 
    colors={[Colors.LIGHT_GRAY, Colors.DARKER_GRAY]}
    testID="home-screen"
    style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.data}>Jan 01, 2000</Text>
    </View>
  </LinearGradient>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    backgroundColor: '#F5FCFF',
  },

  title: {
    justifyContent: 'flex-end',
    backgroundColor: '#F5FCFF',
  },

  data: {
    fontSize: 24,
    color:  Colors.GRAY,
    fontWeight: 'bold',
  }
});

export default HomeScreen;


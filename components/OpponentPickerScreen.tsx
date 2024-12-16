import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const OpponentPickerScreen = ({ navigation }: any) => {
  const selectOpponent = (opponent: string) => {
    navigation.navigate('Game', { opponent });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an Opponent</Text>
      <Pressable onPress={() => selectOpponent('Xi')}>
        <Text style={styles.link}>Xi Jinping</Text>
      </Pressable>
      <Pressable onPress={() => selectOpponent('Putin')}>
        <Text style={styles.link}>Vladimir Putin</Text>
      </Pressable>
      <Pressable onPress={() => selectOpponent('Kim')}>
        <Text style={styles.link}>Kim Jong Un</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  link: { fontSize: 18, color: 'blue', marginBottom: 10 },
});

export default OpponentPickerScreen;
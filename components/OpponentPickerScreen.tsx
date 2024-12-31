import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const OpponentPickerScreen = ({ route, navigation }: any) => {
  const { user } = route.params;
  const selectOpponent = (opponent: string) => {
    navigation.navigate('Game', { opponent });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an Opponent</Text>
      <Pressable onPress={() => selectOpponent('Bezos')}>
        <Text style={styles.link}>Bezos</Text>
      </Pressable>
      <Pressable onPress={() => selectOpponent('Altman')}>
        <Text style={styles.link}>Altman</Text>
      </Pressable>
      <Pressable onPress={() => selectOpponent('Amodei')}>
        <Text style={styles.link}>Amodei</Text>
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
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { generateClient } from 'aws-amplify/api';
import { listLeaderboards } from '../src/graphql/queries';

const client = generateClient();


const LeaderboardScreen = ({ route, navigation }: any) => {
  const { user } = route.params;
  
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const response = await client.graphql({ query: listLeaderboards });
      setLeaderboard(response.data.listLeaderboards.items);
    };
    fetchLeaderboard();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      {leaderboard.map((player: any) => (
        <Text key={player.id} style={styles.text}>
          {player.name}: {player.totalWins} wins
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  text: { fontSize: 18 },
});

export default LeaderboardScreen;

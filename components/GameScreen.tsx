import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image, Alert, StyleSheet } from 'react-native';
import { generateClient } from 'aws-amplify/api';
import { updatePlayer, updateGame, createGame  } from '../src/graphql/mutations';
import { getPlayer } from '../src/graphql/queries';
import { listPlayers } from '../src/graphql/queries';


const client = generateClient();

const trumpImage = require('../assets/trump_headshot_1.jpeg');
const xiImage = require('../assets/xi_communist_1.png');
const putinImage = require('../assets/putin_headshot_1.png');
const kimImage = require('../assets/kim_headshot_1.jpeg');

const opponentImages: any = {
  Xi: xiImage,
  Putin: putinImage,
  Kim: kimImage,
};

const GameScreen = ({ route, navigation }: any) => {
  const { opponent } = route.params;
  const { user } = route.params;
  
  const [game, setGame] = useState<any>(null); // Game object state
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('Trump');
  
  useEffect(() => {
    async function startGame() {
      try {
        // Step 1: Fetch the list of players
        const playersResponse = await client.graphql({
          query: listPlayers,
        });
  
        const players = playersResponse.data.listPlayers.items;
  
        if (players.length < 2) {
          console.error("Not enough players to start a game.");
          return;
        }
  
        // Step 2: Select the first two players
        const player1Id = players[0].id; // Example: First player
        const player2Id = players[1].id; // Example: Second player
  
        console.log(`Player 1: ${player1Id}, Player 2: ${player2Id}`);
  
        // Step 3: Start the game with the real player IDs
        const response = await client.graphql({
          query: createGame,
          variables: {
            input: {
              player1: player1Id,
              player2: player2Id,
              board: Array(9).fill(""), // Initialize board with empty strings
              currentPlayer: "Trump",
            },
          },
        });

        if (response.data && response.data.createGame) {
          const game = response.data.createGame;
          console.log("Game started:", game);
          console.log("Player 1 ID:", game.player1);
        } else {
          console.error("Game creation failed or returned null.");
        }
  
        setGame(response.data.createGame);
        if (response.data && response.data.createGame) {
          const game = response.data.createGame;
          console.log("Game started:", game);
          console.log("Player 1 ID:", game.player1);
        } else {
          console.error("Game creation failed or returned null.");
        }
      } catch (error) {
        console.error("Error starting game:", JSON.stringify(error, null, 2));
      }
    }
  
    startGame();
  }, []);

  const handlePress = (index: number) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      Alert.alert('Game Over', `${winner} wins!`);
      updateWinner(winner); // Update the leaderboard
    } else {
      setCurrentPlayer(currentPlayer === 'Trump' ? opponent : 'Trump');
    }
  };

  const checkWinner = (board: string[]) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  // const updateWinner = async (winner: string) => {
  //   try {
  //     // Fetch the winner's ID (from game or backend context)
  //     const winnerId = winner === 'Trump' ? 'player1-id' : 'player2-id';

  //     // Increment the winner's totalWins
  //     await client.graphql({
  //       query: updatePlayer,
  //       variables: {
  //         input: {
  //           id: winnerId,
  //           totalWins: { increment: 1 }, // Increment the totalWins
  //         },
  //       },
  //     });

  //     // Navigate to the leaderboard after updating
  //     navigation.navigate('Leaderboard');
  //   } catch (error) {
  //     console.error('Error updating leaderboard:', error);
  //   }
  // };

  const updateWinner = async (winner: string) => {
    try {
      // Determine winner ID (player1 or player2)
      // const winnerId = winner === 'Trump' ? game.player1.id : game.player2.id;

      // console.log("Updating winner with ID:", winner);
      // console.log("game is ", game);
      // console.log("winner", winner );
      // console.log("player1 for game is ", game.player1.id );
      // console.log("player2 for game is ", game.player2.id );

      // Step 1: Query the current totalWins for the winner
      // const playerResponse = await client.graphql({
      //   query: getPlayer, // GraphQL query to get the player's current stats
      //   variables: { id: winnerId },
      // });
  
      // const currentWins = playerResponse.data.getPlayer.totalWins;
  
      // // Step 2: Update the player's totalWins
      // const newWins = currentWins + 1;
  
      // await client.graphql({
      //   query: updatePlayer,
      //   variables: {
      //     input: {
      //       id: winnerId,
      //       totalWins: newWins, // Explicitly provide the new value
      //     },
      //   },
      // });
  
      // console.log('Leaderboard updated successfully!');
      navigation.navigate('Leaderboard'); // Navigate to the leaderboard screen
    } catch (error) {
      console.error('Error updating leaderboard:', error);
    }
  };

  const renderSquare = (index: number) => (
    <Pressable key={index} style={styles.square} onPress={() => handlePress(index)}>
      {board[index] && (
        <Image
          source={board[index] === 'Trump' ? trumpImage : opponentImages[opponent]}
          style={styles.roundImage}
        />
      )}
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trump Tac Toe</Text>
      <View style={styles.board}>
        {Array(3)
          .fill(null)
          .map((_, row) => (
            <View key={row} style={styles.row}>
              {Array(3)
                .fill(null)
                .map((_, col) => renderSquare(row * 3 + col))}
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  board: { width: 300, height: 300 },
  row: { flexDirection: 'row' },
  square: { width: 100, height: 100, justifyContent: 'center', alignItems: 'center', borderWidth: 1 },
  image: { width: 80, height: 80 },
  roundImage: {
    width: 100, // Equal width
    height: 100, // Equal height
    borderRadius: 50, // Half of width/height to make it round
    borderWidth: 2, // Optional: Add border for styling
    borderColor: '#ddd', // Optional: Border color
  },
});

export default GameScreen;
import React, { useState } from 'react';
import { Alert, Text, View, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './styles';

const Stack = createStackNavigator();

const trumpImage = require('./assets/trump_headshot_1.jpeg');
const xiImage = require('./assets/xi_communist_1.png');
const putinImage = require('./assets/putin_headshot_1.png');
const kimImage = require('./assets/kim_headshot_1.jpeg');

const opponentImages = {
  Xi: xiImage,
  Putin: putinImage,
  Kim: kimImage,
};

function GameScreen({ route, navigation }) {
  const { opponent } = route.params;
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 board as a 1D array
  const [currentPlayer, setCurrentPlayer] = useState('Trump'); // 'Trump' starts first
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = (index) => {
    if (board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      Alert.alert('Game Over', `${winner} crushes his enemy!`);
    } else if (newBoard.every((cell) => cell)) {
      Alert.alert('Game Over', 'Just another pair of pathetic LOSERS!');
    }

    setCurrentPlayer(currentPlayer === 'Trump' ? opponent : 'Trump');
  };

  const checkWinner = (board) => {
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

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('Trump');
  };

  const renderSquare = (index) => (
    <Pressable style={styles.square} onPress={() => handlePress(index)}>
      {board[index] && (
        <Image
          source={board[index] === 'Trump' ? trumpImage : opponentImages[opponent]}
          style={styles.squareimage}
        />
      )}
    </Pressable>
  );

  return (
    <SafeAreaProvider>
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
        <Pressable
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={resetGame}
        >
          <Text
            style={[
              styles.resetButton,
              isPressed ? styles.textpressed : styles.textreleased,
            ]}
          >
            Reset Game
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('OpponentPicker')}>
          <Text style={styles.link}>Choose Opponent</Text>
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
}

function OpponentPickerScreen({ navigation }) {
  const selectOpponent = (opponent) => {
    navigation.navigate('Game', { opponent });
  };

  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OpponentPicker">
        <Stack.Screen name="Game" component={GameScreen} initialParams={{ opponent: 'Xi' }} />
        <Stack.Screen name="OpponentPicker" component={OpponentPickerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
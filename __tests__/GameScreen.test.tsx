import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GameScreen from '../components/GameScreen';

test('GameScreen renders and updates board on press', () => {
  const { getAllByRole } = render(
    <GameScreen
      route={{ params: { opponent: 'Xi' } }}
      navigation={{ navigate: jest.fn() }}
    />
  );

  const squares = getAllByRole('button');

  // Ensure all squares are initially empty
  squares.forEach((square) => {
    expect(square).toBeTruthy();
  });

  // Simulate pressing the first square
  fireEvent.press(squares[0]);

  // Check that the square now shows the player's piece
  expect(squares[0]).toHaveTextContent('Trump');
});
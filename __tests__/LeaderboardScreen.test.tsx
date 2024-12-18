import React from 'react';
import { render } from '@testing-library/react-native';
import LeaderboardScreen from '../components/LeaderboardScreen';

test('LeaderboardScreen renders leaderboard items correctly', () => {
  const leaderboardMock = [
    { id: '1', name: 'Player 1', totalWins: 10 },
    { id: '2', name: 'Player 2', totalWins: 5 },
  ];

  const { getByText } = render(
    <LeaderboardScreen
      route={{ params: { user: { username: 'testuser' } } }}
      navigation={{}}
    />
  );

  leaderboardMock.forEach((player) => {
    expect(getByText(`${player.name}: ${player.totalWins} wins`)).toBeTruthy();
  });
});
const createGame = async (player1, player2) => {
  const input = {
    player1: { id: player1 },
    player2: { id: player2 },
    board: ["", "", "", "", "", "", "", "", ""], // Default value
    currentPlayer: player1,
  };

  await API.graphql({
    query: `
      mutation CreateGame($input: CreateGameInput!) {
        createGame(input: $input) {
          id
          board
          currentPlayer
        }
      }
    `,
    variables: { input },
  });
};
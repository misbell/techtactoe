

const createPlayer = async (name) => {
  const input = {
    name,
    totalWins: 0, // Default value
  };

  await API.graphql({
    query: `
      mutation CreatePlayer($input: CreatePlayerInput!) {
        createPlayer(input: $input) {
          id
          name
          totalWins
        }
      }
    `,
    variables: { input },
  });
};
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPlayer = /* GraphQL */ `mutation CreatePlayer(
  $input: CreatePlayerInput!
  $condition: ModelPlayerConditionInput
) {
  createPlayer(input: $input, condition: $condition) {
    id
    name
    nickname
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePlayerMutationVariables,
  APITypes.CreatePlayerMutation
>;
export const updatePlayer = /* GraphQL */ `mutation UpdatePlayer(
  $input: UpdatePlayerInput!
  $condition: ModelPlayerConditionInput
) {
  updatePlayer(input: $input, condition: $condition) {
    id
    name
    nickname
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePlayerMutationVariables,
  APITypes.UpdatePlayerMutation
>;
export const deletePlayer = /* GraphQL */ `mutation DeletePlayer(
  $input: DeletePlayerInput!
  $condition: ModelPlayerConditionInput
) {
  deletePlayer(input: $input, condition: $condition) {
    id
    name
    nickname
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePlayerMutationVariables,
  APITypes.DeletePlayerMutation
>;
export const createGame = /* GraphQL */ `mutation CreateGame(
  $input: CreateGameInput!
  $condition: ModelGameConditionInput
) {
  createGame(input: $input, condition: $condition) {
    id
    player1
    player2
    board
    currentPlayer
    winner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGameMutationVariables,
  APITypes.CreateGameMutation
>;
export const updateGame = /* GraphQL */ `mutation UpdateGame(
  $input: UpdateGameInput!
  $condition: ModelGameConditionInput
) {
  updateGame(input: $input, condition: $condition) {
    id
    player1
    player2
    board
    currentPlayer
    winner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGameMutationVariables,
  APITypes.UpdateGameMutation
>;
export const deleteGame = /* GraphQL */ `mutation DeleteGame(
  $input: DeleteGameInput!
  $condition: ModelGameConditionInput
) {
  deleteGame(input: $input, condition: $condition) {
    id
    player1
    player2
    board
    currentPlayer
    winner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGameMutationVariables,
  APITypes.DeleteGameMutation
>;
export const createMatchmakingQueue = /* GraphQL */ `mutation CreateMatchmakingQueue(
  $input: CreateMatchmakingQueueInput!
  $condition: ModelMatchmakingQueueConditionInput
) {
  createMatchmakingQueue(input: $input, condition: $condition) {
    id
    player {
      id
      name
      nickname
      totalWins
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMatchmakingQueueMutationVariables,
  APITypes.CreateMatchmakingQueueMutation
>;
export const updateMatchmakingQueue = /* GraphQL */ `mutation UpdateMatchmakingQueue(
  $input: UpdateMatchmakingQueueInput!
  $condition: ModelMatchmakingQueueConditionInput
) {
  updateMatchmakingQueue(input: $input, condition: $condition) {
    id
    player {
      id
      name
      nickname
      totalWins
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMatchmakingQueueMutationVariables,
  APITypes.UpdateMatchmakingQueueMutation
>;
export const deleteMatchmakingQueue = /* GraphQL */ `mutation DeleteMatchmakingQueue(
  $input: DeleteMatchmakingQueueInput!
  $condition: ModelMatchmakingQueueConditionInput
) {
  deleteMatchmakingQueue(input: $input, condition: $condition) {
    id
    player {
      id
      name
      nickname
      totalWins
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMatchmakingQueueMutationVariables,
  APITypes.DeleteMatchmakingQueueMutation
>;
export const createLeaderboard = /* GraphQL */ `mutation CreateLeaderboard(
  $input: CreateLeaderboardInput!
  $condition: ModelLeaderboardConditionInput
) {
  createLeaderboard(input: $input, condition: $condition) {
    id
    name
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLeaderboardMutationVariables,
  APITypes.CreateLeaderboardMutation
>;
export const updateLeaderboard = /* GraphQL */ `mutation UpdateLeaderboard(
  $input: UpdateLeaderboardInput!
  $condition: ModelLeaderboardConditionInput
) {
  updateLeaderboard(input: $input, condition: $condition) {
    id
    name
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLeaderboardMutationVariables,
  APITypes.UpdateLeaderboardMutation
>;
export const deleteLeaderboard = /* GraphQL */ `mutation DeleteLeaderboard(
  $input: DeleteLeaderboardInput!
  $condition: ModelLeaderboardConditionInput
) {
  deleteLeaderboard(input: $input, condition: $condition) {
    id
    name
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLeaderboardMutationVariables,
  APITypes.DeleteLeaderboardMutation
>;

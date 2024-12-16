/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePlayer = /* GraphQL */ `subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
  onCreatePlayer(filter: $filter) {
    id
    name
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlayerSubscriptionVariables,
  APITypes.OnCreatePlayerSubscription
>;
export const onUpdatePlayer = /* GraphQL */ `subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
  onUpdatePlayer(filter: $filter) {
    id
    name
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerSubscriptionVariables,
  APITypes.OnUpdatePlayerSubscription
>;
export const onDeletePlayer = /* GraphQL */ `subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
  onDeletePlayer(filter: $filter) {
    id
    name
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlayerSubscriptionVariables,
  APITypes.OnDeletePlayerSubscription
>;
export const onCreateGame = /* GraphQL */ `subscription OnCreateGame($filter: ModelSubscriptionGameFilterInput) {
  onCreateGame(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGameSubscriptionVariables,
  APITypes.OnCreateGameSubscription
>;
export const onUpdateGame = /* GraphQL */ `subscription OnUpdateGame($filter: ModelSubscriptionGameFilterInput) {
  onUpdateGame(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGameSubscriptionVariables,
  APITypes.OnUpdateGameSubscription
>;
export const onDeleteGame = /* GraphQL */ `subscription OnDeleteGame($filter: ModelSubscriptionGameFilterInput) {
  onDeleteGame(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGameSubscriptionVariables,
  APITypes.OnDeleteGameSubscription
>;
export const onCreateMatchmakingQueue = /* GraphQL */ `subscription OnCreateMatchmakingQueue(
  $filter: ModelSubscriptionMatchmakingQueueFilterInput
) {
  onCreateMatchmakingQueue(filter: $filter) {
    id
    player {
      id
      name
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
` as GeneratedSubscription<
  APITypes.OnCreateMatchmakingQueueSubscriptionVariables,
  APITypes.OnCreateMatchmakingQueueSubscription
>;
export const onUpdateMatchmakingQueue = /* GraphQL */ `subscription OnUpdateMatchmakingQueue(
  $filter: ModelSubscriptionMatchmakingQueueFilterInput
) {
  onUpdateMatchmakingQueue(filter: $filter) {
    id
    player {
      id
      name
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
` as GeneratedSubscription<
  APITypes.OnUpdateMatchmakingQueueSubscriptionVariables,
  APITypes.OnUpdateMatchmakingQueueSubscription
>;
export const onDeleteMatchmakingQueue = /* GraphQL */ `subscription OnDeleteMatchmakingQueue(
  $filter: ModelSubscriptionMatchmakingQueueFilterInput
) {
  onDeleteMatchmakingQueue(filter: $filter) {
    id
    player {
      id
      name
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
` as GeneratedSubscription<
  APITypes.OnDeleteMatchmakingQueueSubscriptionVariables,
  APITypes.OnDeleteMatchmakingQueueSubscription
>;
export const onCreateLeaderboard = /* GraphQL */ `subscription OnCreateLeaderboard(
  $filter: ModelSubscriptionLeaderboardFilterInput
) {
  onCreateLeaderboard(filter: $filter) {
    id
    name
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLeaderboardSubscriptionVariables,
  APITypes.OnCreateLeaderboardSubscription
>;
export const onUpdateLeaderboard = /* GraphQL */ `subscription OnUpdateLeaderboard(
  $filter: ModelSubscriptionLeaderboardFilterInput
) {
  onUpdateLeaderboard(filter: $filter) {
    id
    name
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLeaderboardSubscriptionVariables,
  APITypes.OnUpdateLeaderboardSubscription
>;
export const onDeleteLeaderboard = /* GraphQL */ `subscription OnDeleteLeaderboard(
  $filter: ModelSubscriptionLeaderboardFilterInput
) {
  onDeleteLeaderboard(filter: $filter) {
    id
    name
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLeaderboardSubscriptionVariables,
  APITypes.OnDeleteLeaderboardSubscription
>;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPlayer = /* GraphQL */ `query GetPlayer($id: ID!) {
  getPlayer(id: $id) {
    id
    name
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPlayerQueryVariables, APITypes.GetPlayerQuery>;
export const listPlayers = /* GraphQL */ `query ListPlayers(
  $filter: ModelPlayerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      totalWins
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlayersQueryVariables,
  APITypes.ListPlayersQuery
>;
export const getGame = /* GraphQL */ `query GetGame($id: ID!) {
  getGame(id: $id) {
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
` as GeneratedQuery<APITypes.GetGameQueryVariables, APITypes.GetGameQuery>;
export const listGames = /* GraphQL */ `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListGamesQueryVariables, APITypes.ListGamesQuery>;
export const getMatchmakingQueue = /* GraphQL */ `query GetMatchmakingQueue($id: ID!) {
  getMatchmakingQueue(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMatchmakingQueueQueryVariables,
  APITypes.GetMatchmakingQueueQuery
>;
export const listMatchmakingQueues = /* GraphQL */ `query ListMatchmakingQueues(
  $filter: ModelMatchmakingQueueFilterInput
  $limit: Int
  $nextToken: String
) {
  listMatchmakingQueues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMatchmakingQueuesQueryVariables,
  APITypes.ListMatchmakingQueuesQuery
>;
export const getLeaderboard = /* GraphQL */ `query GetLeaderboard($id: ID!) {
  getLeaderboard(id: $id) {
    id
    name
    totalWins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLeaderboardQueryVariables,
  APITypes.GetLeaderboardQuery
>;
export const listLeaderboards = /* GraphQL */ `query ListLeaderboards(
  $filter: ModelLeaderboardFilterInput
  $limit: Int
  $nextToken: String
) {
  listLeaderboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      totalWins
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLeaderboardsQueryVariables,
  APITypes.ListLeaderboardsQuery
>;

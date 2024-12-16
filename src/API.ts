/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlayerInput = {
  id?: string | null,
  name: string,
  totalWins: number,
};

export type ModelPlayerConditionInput = {
  name?: ModelStringInput | null,
  totalWins?: ModelIntInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Player = {
  __typename: "Player",
  id: string,
  name: string,
  totalWins: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePlayerInput = {
  id: string,
  name?: string | null,
  totalWins?: number | null,
};

export type DeletePlayerInput = {
  id: string,
};

export type CreateGameInput = {
  id?: string | null,
  player1: string,
  player2: string,
  board: Array< string >,
  currentPlayer: string,
  winner?: string | null,
};

export type ModelGameConditionInput = {
  player1?: ModelIDInput | null,
  player2?: ModelIDInput | null,
  board?: ModelStringInput | null,
  currentPlayer?: ModelStringInput | null,
  winner?: ModelIDInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Game = {
  __typename: "Game",
  id: string,
  player1: string,
  player2: string,
  board: Array< string >,
  currentPlayer: string,
  winner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGameInput = {
  id: string,
  player1?: string | null,
  player2?: string | null,
  board?: Array< string > | null,
  currentPlayer?: string | null,
  winner?: string | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreateMatchmakingQueueInput = {
  id?: string | null,
  createdAt?: string | null,
};

export type ModelMatchmakingQueueConditionInput = {
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMatchmakingQueueConditionInput | null > | null,
  or?: Array< ModelMatchmakingQueueConditionInput | null > | null,
  not?: ModelMatchmakingQueueConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type MatchmakingQueue = {
  __typename: "MatchmakingQueue",
  id: string,
  player: Player,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMatchmakingQueueInput = {
  id: string,
  createdAt?: string | null,
};

export type DeleteMatchmakingQueueInput = {
  id: string,
};

export type CreateLeaderboardInput = {
  id?: string | null,
  name: string,
  totalWins: number,
};

export type ModelLeaderboardConditionInput = {
  name?: ModelStringInput | null,
  totalWins?: ModelIntInput | null,
  and?: Array< ModelLeaderboardConditionInput | null > | null,
  or?: Array< ModelLeaderboardConditionInput | null > | null,
  not?: ModelLeaderboardConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Leaderboard = {
  __typename: "Leaderboard",
  id: string,
  name: string,
  totalWins: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLeaderboardInput = {
  id: string,
  name?: string | null,
  totalWins?: number | null,
};

export type DeleteLeaderboardInput = {
  id: string,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  totalWins?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items:  Array<Player | null >,
  nextToken?: string | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  player1?: ModelIDInput | null,
  player2?: ModelIDInput | null,
  board?: ModelStringInput | null,
  currentPlayer?: ModelStringInput | null,
  winner?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
};

export type ModelMatchmakingQueueFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMatchmakingQueueFilterInput | null > | null,
  or?: Array< ModelMatchmakingQueueFilterInput | null > | null,
  not?: ModelMatchmakingQueueFilterInput | null,
};

export type ModelMatchmakingQueueConnection = {
  __typename: "ModelMatchmakingQueueConnection",
  items:  Array<MatchmakingQueue | null >,
  nextToken?: string | null,
};

export type ModelLeaderboardFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  totalWins?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLeaderboardFilterInput | null > | null,
  or?: Array< ModelLeaderboardFilterInput | null > | null,
  not?: ModelLeaderboardFilterInput | null,
};

export type ModelLeaderboardConnection = {
  __typename: "ModelLeaderboardConnection",
  items:  Array<Leaderboard | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPlayerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  totalWins?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayerFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionGameFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  player1?: ModelSubscriptionIDInput | null,
  player2?: ModelSubscriptionIDInput | null,
  board?: ModelSubscriptionStringInput | null,
  currentPlayer?: ModelSubscriptionStringInput | null,
  winner?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGameFilterInput | null > | null,
  or?: Array< ModelSubscriptionGameFilterInput | null > | null,
};

export type ModelSubscriptionMatchmakingQueueFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMatchmakingQueueFilterInput | null > | null,
  or?: Array< ModelSubscriptionMatchmakingQueueFilterInput | null > | null,
};

export type ModelSubscriptionLeaderboardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  totalWins?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLeaderboardFilterInput | null > | null,
  or?: Array< ModelSubscriptionLeaderboardFilterInput | null > | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    player1: string,
    player2: string,
    board: Array< string >,
    currentPlayer: string,
    winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    player1: string,
    player2: string,
    board: Array< string >,
    currentPlayer: string,
    winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    player1: string,
    player2: string,
    board: Array< string >,
    currentPlayer: string,
    winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMatchmakingQueueMutationVariables = {
  input: CreateMatchmakingQueueInput,
  condition?: ModelMatchmakingQueueConditionInput | null,
};

export type CreateMatchmakingQueueMutation = {
  createMatchmakingQueue?:  {
    __typename: "MatchmakingQueue",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      totalWins: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMatchmakingQueueMutationVariables = {
  input: UpdateMatchmakingQueueInput,
  condition?: ModelMatchmakingQueueConditionInput | null,
};

export type UpdateMatchmakingQueueMutation = {
  updateMatchmakingQueue?:  {
    __typename: "MatchmakingQueue",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      totalWins: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMatchmakingQueueMutationVariables = {
  input: DeleteMatchmakingQueueInput,
  condition?: ModelMatchmakingQueueConditionInput | null,
};

export type DeleteMatchmakingQueueMutation = {
  deleteMatchmakingQueue?:  {
    __typename: "MatchmakingQueue",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      totalWins: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLeaderboardMutationVariables = {
  input: CreateLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type CreateLeaderboardMutation = {
  createLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLeaderboardMutationVariables = {
  input: UpdateLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type UpdateLeaderboardMutation = {
  updateLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLeaderboardMutationVariables = {
  input: DeleteLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type DeleteLeaderboardMutation = {
  deleteLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      name: string,
      totalWins: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    player1: string,
    player2: string,
    board: Array< string >,
    currentPlayer: string,
    winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      player1: string,
      player2: string,
      board: Array< string >,
      currentPlayer: string,
      winner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMatchmakingQueueQueryVariables = {
  id: string,
};

export type GetMatchmakingQueueQuery = {
  getMatchmakingQueue?:  {
    __typename: "MatchmakingQueue",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      totalWins: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMatchmakingQueuesQueryVariables = {
  filter?: ModelMatchmakingQueueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMatchmakingQueuesQuery = {
  listMatchmakingQueues?:  {
    __typename: "ModelMatchmakingQueueConnection",
    items:  Array< {
      __typename: "MatchmakingQueue",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLeaderboardQueryVariables = {
  id: string,
};

export type GetLeaderboardQuery = {
  getLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLeaderboardsQueryVariables = {
  filter?: ModelLeaderboardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLeaderboardsQuery = {
  listLeaderboards?:  {
    __typename: "ModelLeaderboardConnection",
    items:  Array< {
      __typename: "Leaderboard",
      id: string,
      name: string,
      totalWins: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    player1: string,
    player2: string,
    board: Array< string >,
    currentPlayer: string,
    winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    player1: string,
    player2: string,
    board: Array< string >,
    currentPlayer: string,
    winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    player1: string,
    player2: string,
    board: Array< string >,
    currentPlayer: string,
    winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMatchmakingQueueSubscriptionVariables = {
  filter?: ModelSubscriptionMatchmakingQueueFilterInput | null,
};

export type OnCreateMatchmakingQueueSubscription = {
  onCreateMatchmakingQueue?:  {
    __typename: "MatchmakingQueue",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      totalWins: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMatchmakingQueueSubscriptionVariables = {
  filter?: ModelSubscriptionMatchmakingQueueFilterInput | null,
};

export type OnUpdateMatchmakingQueueSubscription = {
  onUpdateMatchmakingQueue?:  {
    __typename: "MatchmakingQueue",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      totalWins: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMatchmakingQueueSubscriptionVariables = {
  filter?: ModelSubscriptionMatchmakingQueueFilterInput | null,
};

export type OnDeleteMatchmakingQueueSubscription = {
  onDeleteMatchmakingQueue?:  {
    __typename: "MatchmakingQueue",
    id: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      totalWins: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLeaderboardSubscriptionVariables = {
  filter?: ModelSubscriptionLeaderboardFilterInput | null,
};

export type OnCreateLeaderboardSubscription = {
  onCreateLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLeaderboardSubscriptionVariables = {
  filter?: ModelSubscriptionLeaderboardFilterInput | null,
};

export type OnUpdateLeaderboardSubscription = {
  onUpdateLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLeaderboardSubscriptionVariables = {
  filter?: ModelSubscriptionLeaderboardFilterInput | null,
};

export type OnDeleteLeaderboardSubscription = {
  onDeleteLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    name: string,
    totalWins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

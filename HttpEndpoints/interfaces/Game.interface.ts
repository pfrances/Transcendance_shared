export type GameStatus = 'IN_CREATION' | 'IN_PROGRESS' | 'PAUSED' | 'FINISHED' | 'CANCELED';
export type GameMatchMakingStatus =
  | 'UNREGISTERED'
  | 'WAITING_FOR_PLAYER'
  | 'IN_GAME_CREATION'
  | 'IN_GAME';

export interface GameMatchMakingInfo {
  status: GameMatchMakingStatus;
  gameInCreationId?: number;
  gameId?: number;
}

export type GameRules = {
  scoreToWin: number;
};

/*          GAME IN PROGRESS          */
export type GameInProgressPlayerData = {
  userId: number;
  paddlePos: number;
  score: number;
};

export type GameInProgressData = {
  gameId: number;
  status: Omit<GameStatus, 'IN_CREATION'>;
  rules: GameRules;
  playerOne: GameInProgressPlayerData;
  playerTwo: GameInProgressPlayerData;

  ballPositionX: number;
  ballPositionY: number;
};

/*          GAME IN CREATION          */
export type GameInCreationPlayerData = {
  userId: number;
  hasAccepted: boolean;
};

export type GameInCreationData = {
  gameInCreationId: number;
  status: 'IN_CREATION' | 'IN_PROGRESS';
  rules: GameRules;
  playerOne: GameInCreationPlayerData;
  playerTwo: GameInCreationPlayerData;
};

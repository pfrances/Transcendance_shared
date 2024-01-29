import {UserPublicProfile} from './UserProfileInfo.interface';

export type GameStatus = 'IN_CREATION' | 'IN_PROGRESS' | 'PAUSED' | 'FINISHED' | 'CANCELED';
export type GameMatchMakingStatus =
  | 'UNREGISTERED'
  | 'WAITING_FOR_PLAYER'
  | 'IN_GAME_CREATION'
  | 'IN_GAME';

export interface GameMatchMakingInfo {
  lastGameId?: number;
  status: GameMatchMakingStatus;
  gameInCreationId?: number;
  gameId?: number;
}

export const getHeightFromRatio = (width: number) => (width * 3) / 4;
export const getWidthFromRato = (height: number) => (height * 4) / 3;

export type BallSpeed = 'SLOW' | 'NORMAL' | 'FAST' | 'VERY_FAST';
export type BallSize = 'VERY_SMALL' | 'SMALL' | 'NORMAL' | 'BIG' | 'VERY_BIG';
export type PaddleSpeed = 'SLOW' | 'NORMAL' | 'FAST' | 'VERY_FAST';
export type PaddleSize = 'VERY_SMALL' | 'SMALL' | 'NORMAL' | 'BIG' | 'VERY_BIG';

export const ballSpeedToNumber = (ballSpeed: BallSpeed) =>
  ({
    SLOW: 0.004,
    NORMAL: 0.006,
    FAST: 0.09,
    VERY_FAST: 0.012,
  }[ballSpeed]);

export const ballSizeToNumber = (ballSize: BallSize) =>
  ({
    VERY_SMALL: 0.005,
    SMALL: 0.01,
    NORMAL: 0.015,
    BIG: 0.02,
    VERY_BIG: 0.03,
  }[ballSize]);

export const paddleSpeedToNumber = (paddleSpeed: PaddleSpeed) =>
  ({
    SLOW: 0.015,
    NORMAL: 0.025,
    FAST: 0.035,
    VERY_FAST: 0.05,
  }[paddleSpeed]);

export const paddleHeightToNumber = (paddleSize: PaddleSize) =>
  ({
    VERY_SMALL: 0.125,
    SMALL: 0.25,
    NORMAL: 0.375,
    BIG: 0.5,
    VERY_BIG: 0.65,
  }[paddleSize]);

export const paddleWidthToNumber = (paddleSize: PaddleSize) =>
  ({
    VERY_SMALL: 0.01,
    SMALL: 0.02,
    NORMAL: 0.03,
    BIG: 0.4,
    VERY_BIG: 0.05,
  }[paddleSize]);

export type Ball = {
  x: number;
  y: number;
};

export type Player = {
  paddlePos: number;
  score: number;
};

export type GameRules = {
  scoreToWin: number;
  ballSpeed: BallSpeed;
  ballSize: BallSize;
  paddleSpeed: PaddleSpeed;
  paddleSize: PaddleSize;
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
  player1: GameInProgressPlayerData;
  player2: GameInProgressPlayerData;

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
  player1: GameInCreationPlayerData;
  player2: GameInCreationPlayerData;
};

/*        GAME History        */
export type GameHistory = {
  gameId: number;
  winnerId?: number;
  player1: {
    profile: UserPublicProfile;
    score: number;
  };
  player2: {
    profile: UserPublicProfile;
    score: number;
  };
  rules: GameRules;
  startDate: Date;
  endDate?: Date;
};

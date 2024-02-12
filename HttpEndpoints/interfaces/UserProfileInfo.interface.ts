export interface UserPublicProfile {
  userId: number;
  nickname: string;
  avatarUrl: string | null;
  isOnline: boolean;
}

export type UserStatusType =
  | 'offline'
  | 'waitingForGame'
  | 'onGame'
  | 'lookingForChat'
  | 'onChat'
  | 'chilling';

export interface UserStatus {
  status: UserStatusType;
  game?: {
    gameId: number;
    WithWho: string;
  };
  chat?: {
    chatId: number;
    chatName: string;
  };
}

export type UserPublicProfileRegardingMe = UserPublicProfile & {
  hasBlockedMe: boolean;
  isBlocked: boolean;
  isFriend: boolean;
  achievements: Achievement[];
} & UserStatus;

export interface UserPrivateProfile {
  userId: number;
  nickname: string;
  email: string;
  avatarUrl: string | null;
  hasSet2Fa: boolean;
  achievements: Achievement[];
}

export interface Achievement {
  achievementId: number;
  name: AchievementName;
  obtainedAt: Date;
}

export type AchievementName =
  | 'firstGame'
  | 'firstWin'
  | 'longGame' // end a 20 points game
  | 'shortGame' // end a 1 points game
  | 'largePaddleSmallBall' // play with a large paddle and a small ball
  | 'smallPaddleLargeBall' // play with a small paddle and a large ball
  | 'speedUp' // play with a fast ball and a fast paddle
  | 'speedDown' // play with a slow ball and a slow paddle
  | 'impossibleSpeed' // play with a fast ball and a slow paddle
  | 'impossible' // play with small paddle, small ball, fast ball and slow paddle
  | 'quick'; // win a game in less than 30 secondes

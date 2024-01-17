export interface UserPublicProfile {
  userId: number;
  nickname: string;
  avatarUrl: string | null;
  isOnline: boolean;
}

export type UserStatusType = 'offline' | 'waitingForGame' | 'onGame' | 'onChat' | 'chilling';

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
} & UserStatus;

export interface UserPrivateProfile {
  userId: number;
  nickname: string;
  email: string;
  avatarUrl: string | null;
  hasSet2Fa: boolean;
}

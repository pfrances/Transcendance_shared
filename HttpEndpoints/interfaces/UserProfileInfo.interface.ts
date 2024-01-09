export interface UserPublicProfile {
  userId: number;
  nickname: string;
  avatarUrl: string | null;
  isOnline: boolean;
}

export interface UserPrivateProfile {
  userId: number;
  nickname: string;
  email: string;
  avatarUrl: string | null;
}

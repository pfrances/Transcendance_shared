export interface UserPublicProfile {
  userId: number;
  nickname: string;
  avatarUrl: string | null;
}

export interface FriendPublicProfilesList {
  friendsProfiles: UserPublicProfile[];
}

export interface UserPrivateProfile {
  userId: number;
  nickname: string;
  email: string;
  avatarUrl: string | null;
}

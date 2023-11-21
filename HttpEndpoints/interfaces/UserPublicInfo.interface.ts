export interface UserPublicProfile {
  userId: number;
  nickname: string;
  avatarUrl: string | null;
}

export interface FriendPublicProfilesList {
  friendsProfiles: UserPublicProfile[];
}

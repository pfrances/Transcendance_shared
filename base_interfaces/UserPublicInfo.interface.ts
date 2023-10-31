export interface UserPublicProfile {
  userId: number;
  nickname: string;
  avatarUrl: string;
}

export interface FriendPublicProfilesList {
  friendsProfiles: UserPublicProfile[];
}

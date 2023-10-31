import {FriendPublicProfilesList} from '../../base_interfaces';

/****************DELETE****************/
export const RemoveFriendEndPoint = 'remove';

export interface RemoveFriendData {
  friendId: number;
}

export interface RemoveFriendResponse extends FriendPublicProfilesList {
  friendsProfiles: {
    userId: number;
    nickname: string;
    avatarUrl: string;
  }[];
}

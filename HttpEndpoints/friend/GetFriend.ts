import {FriendPublicProfilesList} from '../../base_interfaces';

/****************GET****************/
export const GetFriendProfilesEndPoint = '';

export interface GetFriendProfilesResponse extends FriendPublicProfilesList {
  friendsProfiles: {
    userId: number;
    nickname: string;
    avatarUrl: string;
  }[];
}

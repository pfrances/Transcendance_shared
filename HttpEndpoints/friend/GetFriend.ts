import {HttpFriendEndPointBase} from '.';
import {HttpMethod} from '../enum';
import {FriendPublicProfilesList} from '../interfaces';

export namespace HttpGetFriendsList {
  export const method = HttpMethod.GET;
  export const endPoint = '/';
  export const endPointFull = `${HttpFriendEndPointBase}${endPoint}`;

  export class resTemplate implements FriendPublicProfilesList {
    friendsProfiles: {
      userId: number;
      nickname: string;
      avatarUrl: string;
    }[];
  }
}

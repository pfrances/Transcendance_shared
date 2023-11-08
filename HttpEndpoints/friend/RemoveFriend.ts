import {HttpFriendEndPointBase} from '.';
import {HttpMethod} from '../enum';
import {FriendPublicProfilesList} from '../interfaces';

export namespace HttpRemoveFriend {
  export const method = HttpMethod.DELETE;
  export const endPoint = '/remove';
  export const endPointFull = `${HttpFriendEndPointBase}${endPoint}`;

  export class reqTemplate {
    friendId: number;
  }

  export class resTemplate implements FriendPublicProfilesList {
    friendsProfiles: {
      userId: number;
      nickname: string;
      avatarUrl: string;
    }[];
  }
}

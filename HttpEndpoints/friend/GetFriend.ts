import {HttpEndPointBase, HttpMethod} from '../enum';
import {FriendPublicProfilesList} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetFriendsList {
  export const method = HttpMethod.GET;
  export const endPoint = '/';
  export const endPointFull = `${HttpEndPointBase.FRIEND}${endPoint}`;

  export class reqTemplate {}

  export class resTemplate {
    friendsProfiles: {
      userId: number;
      nickname: string;
      avatarUrl: string | null;
    }[];

    constructor(friendsProfiles: FriendPublicProfilesList) {
      this.friendsProfiles = friendsProfiles.friendsProfiles;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(authToken: string) {
      super(endPointFull, method, reqTemplate, resTemplate, authToken);
    }
  }
}

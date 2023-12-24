import {HttpEndPointBase, HttpMethod} from '../enum';
import {FriendPublicProfilesList} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpRemoveFriend {
  export const method = HttpMethod.DELETE;
  export const endPoint = '/remove';
  export const endPointFull = `${HttpEndPointBase.FRIEND}${endPoint}`;

  export class reqTemplate {
    public readonly friendId: number;

    constructor(friendId: number) {
      this.friendId = friendId;
    }
  }

  export class resTemplate {
    public readonly friendsProfiles: {
      userId: number;
      nickname: string;
      avatarUrl: string | null;
    }[];

    constructor(friendsProfiles: FriendPublicProfilesList) {
      this.friendsProfiles = friendsProfiles.friendsProfiles;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(req: reqTemplate) {
      super(endPointFull, method, req, resTemplate);
    }
  }
}

import {HttpEndPointBase, HttpMethod} from '../enum';
import {UserPublicProfile} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetFriendsList {
  export const method = HttpMethod.GET;
  export const endPoint = '/';
  export const endPointFull = `${HttpEndPointBase.FRIEND}${endPoint}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly friendsProfiles: UserPublicProfile[];

    constructor(friendsProfiles: UserPublicProfile[]) {
      this.friendsProfiles = friendsProfiles;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor() {
      super(endPointFull, method, reqTemplate, resTemplate);
    }
  }
}

import {HttpEndPointBase, HttpMethod} from '../enum';
import {DirectMessage, DirectMessageInfo, UserPublicProfile} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetDirectMessages {
  export const method = HttpMethod.GET;
  export const endPoint = '/direct/:userId';
  export const getEndPoint = (userId: number) => `/direct/${userId}`;
  export const getEndPointFull = (userId: number) =>
    `${HttpEndPointBase.CHAT}${getEndPoint(userId)}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly userProfile: UserPublicProfile;
    public readonly messages: DirectMessage[];

    constructor({userProfile, messages}: DirectMessageInfo) {
      this.userProfile = userProfile;
      this.messages = messages;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(userId: number) {
      super(getEndPointFull(userId), method, reqTemplate, resTemplate);
    }
  }
}

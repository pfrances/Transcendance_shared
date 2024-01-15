import {HttpEndPointBase, HttpMethod} from '../enum';
import {ARequestSender} from '../interfaces/ARequestSender';
import {Invitation} from '../interfaces/invitation.interface';

export namespace HttpGetInvitationFromTo {
  export const method = HttpMethod.GET;
  export const endPoint = '/from/:userId/';
  export const getEndPoint = (userId: number) => `/from/${userId}`;
  export const getEndPointFull = (userId: number) =>
    `${HttpEndPointBase.INVITATION}${getEndPoint(userId)}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly invitations: Invitation[];

    constructor(invitations: Invitation[]) {
      this.invitations = invitations;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(userId: number) {
      super(getEndPointFull(userId), method, reqTemplate, resTemplate);
    }
  }
}

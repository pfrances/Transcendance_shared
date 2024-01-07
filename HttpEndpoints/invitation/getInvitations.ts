import {HttpEndPointBase, HttpMethod} from '../enum';
import {ARequestSender} from '../interfaces/ARequestSender';
import {Invitation} from '../interfaces/invitation.interface';
import {InvitationKind_Url} from '../types';

export namespace HttpGetInvitations {
  export const method = HttpMethod.GET;
  export const endPoint = '/:kind/';
  export const getEndPoint = (kind: InvitationKind_Url) => `/${kind}`;
  export const getEndPointFull = (kind: InvitationKind_Url) =>
    `${HttpEndPointBase.INVITATION}${getEndPoint(kind)}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly invitations: Invitation[];

    constructor(data: Invitation[]) {
      this.invitations = data;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(kind: InvitationKind_Url) {
      super(getEndPointFull(kind), method, reqTemplate, resTemplate);
    }
  }
}

import {HttpEndPointBase, HttpMethod} from '../enum';
import {InvitationAction_Url, InvitationKind_Url} from '../types';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpUpdateInvitation {
  export const method = HttpMethod.POST;
  export const endPoint = '/:kind/:action/:invitationId';
  export const getEndPoint = (kind: InvitationKind_Url, action: InvitationAction_Url, id: number) =>
    `/${kind}/${action}/${id}`;
  export const getEndPointFull = (
    kind: InvitationKind_Url,
    action: InvitationAction_Url,
    id: number,
  ) => `${HttpEndPointBase.INVITATION}${getEndPoint(kind, action, id)}`;

  export class reqTemplate {}

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(kind: InvitationKind_Url, action: InvitationAction_Url, id: number) {
      super(getEndPointFull(kind, action, id), method, reqTemplate, resTemplate);
    }
  }
}

import {HttpEndPointBase, HttpMethod} from '../enum';
import {InvitationKind_Url} from '../types';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpSendInvitation {
  export const method = HttpMethod.POST;
  export const endPoint = '/:kind/send/';
  export const getEndPoint = (kind: InvitationKind_Url) => `/${kind}/send`;
  export const getEndPointFull = (kind: InvitationKind_Url) =>
    `${HttpEndPointBase.INVITATION}${getEndPoint(kind)}`;

  export interface reqTemplate {
    targetUserId: number;
    targetChatId?: number;
    targetGameId?: number;
  }

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(kind: InvitationKind_Url, req: reqTemplate) {
      super(getEndPointFull(kind), method, req, resTemplate);
    }
  }
}

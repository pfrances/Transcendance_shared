import {HttpEndPointBase, HttpMethod} from '../enum';
import {InvitationKind_Url} from '../types';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpSendInvitation {
  export const method = HttpMethod.POST;
  export const endPoint = '/:kind/send/';
  export const getEndPoint = (kind: InvitationKind_Url) => `/${kind}/send`;
  export const getEndPointFull = (kind: InvitationKind_Url) =>
    `${HttpEndPointBase.INVITATION}${getEndPoint(kind)}`;

  export interface Friend_reqTemplate {
    targetUserId: number;
  }

  export interface Chat_reqTemplate {
    targetUserId: number;
    targetChatId: number;
  }

  export interface Game_reqTemplate {
    targetUserId: number;
    targetGameId: number;
  }

  export type reqTemplate = Friend_reqTemplate | Chat_reqTemplate | Game_reqTemplate;

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(kind: InvitationKind_Url, req: reqTemplate) {
      super(getEndPointFull(kind), method, req, resTemplate);
    }
  }
}

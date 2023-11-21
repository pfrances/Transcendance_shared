import {HttpMethod} from '../enum';
import {HttpInvitationEndPointBase} from '.';
import {InvitationKind, InvitationKind_Url, InvitationStatus} from '../types';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpSendInvitation {
  export const method = HttpMethod.POST;
  export const endPoint = '/:kind/send/';
  export const getEndPoint = (kind: InvitationKind_Url) => `/${kind}/send`;
  export const getEndPointFull = (kind: InvitationKind_Url) =>
    `${HttpInvitationEndPointBase}${getEndPoint(kind)}`;

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

  export class resTemplate {
    invitationId: number;
    senderId: number;
    receiverId: number;
    status: InvitationStatus;
    kind: InvitationKind;
    targetChatId?: number;
    targetGameId?: number;

    constructor({
      invitationId,
      senderId,
      receiverId,
      status,
      kind,
      targetChatId,
      targetGameId,
    }: resTemplate) {
      this.invitationId = invitationId;
      this.senderId = senderId;
      this.receiverId = receiverId;
      this.status = status;
      this.kind = kind;
      this.targetChatId = targetChatId;
      this.targetGameId = targetGameId;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(kind: InvitationKind_Url, req: reqTemplate, authToken: string) {
      super(getEndPointFull(kind), method, req, resTemplate, authToken);
    }
  }
}

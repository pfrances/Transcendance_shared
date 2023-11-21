import {HttpMethod} from '../enum';
import {HttpInvitationEndPointBase} from '.';
import {InvitationAction_Url, InvitationKind, InvitationKind_Url, InvitationStatus} from '../types';
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
  ) => `${HttpInvitationEndPointBase}${getEndPoint(kind, action, id)}`;

  export interface reqTemplate {}

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
    constructor(
      kind: InvitationKind_Url,
      action: InvitationAction_Url,
      id: number,
      req: reqTemplate,
      authToken: string,
    ) {
      super(getEndPointFull(kind, action, id), method, req, resTemplate, authToken);
    }
  }
}

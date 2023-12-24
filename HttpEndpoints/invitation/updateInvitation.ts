import {HttpEndPointBase, HttpMethod} from '../enum';
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
  ) => `${HttpEndPointBase.INVITATION}${getEndPoint(kind, action, id)}`;

  export interface reqTemplate {}

  export class resTemplate {
    public readonly invitationId: number;
    public readonly senderId: number;
    public readonly receiverId: number;
    public readonly status: InvitationStatus;
    public readonly kind: InvitationKind;
    public readonly targetChatId?: number;
    public readonly targetGameId?: number;

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
    ) {
      super(getEndPointFull(kind, action, id), method, req, resTemplate);
    }
  }
}

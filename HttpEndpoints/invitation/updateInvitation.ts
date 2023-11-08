import {HttpMethod} from '../enum';
import {HttpInvitationEndPointBase} from '.';
import {InvitationAction_Url, InvitationKind, InvitationKind_Url, InvitationStatus} from '../types';

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
  }
}

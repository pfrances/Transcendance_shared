import {InvitationKind, InvitationStatus} from '../types';

export interface Invitation {
  invitationId: number;
  senderId: number;
  receiverId: number;
  status: InvitationStatus;
  kind: InvitationKind;
  targetChatId: number | null;
  targetGameId: number | null;
}

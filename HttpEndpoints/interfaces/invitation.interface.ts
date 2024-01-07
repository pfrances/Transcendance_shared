import {InvitationKind, InvitationStatus} from '../types';
import {UserPublicProfile} from './UserProfileInfo.interface';

export type Invitation = {
  invitationId: number;
  sender: UserPublicProfile;
  receiver: UserPublicProfile;
  status: InvitationStatus;
} & (friendInvitationDetails | chatInvitationDetails | gameInvitationDetails);

type friendInvitationDetails = {
  kind: 'FRIEND';
} & {kind: InvitationKind};

type chatInvitationDetails = {
  kind: 'CHAT';
  targetChatId: number;
  targetChatName: string;
} & {kind: InvitationKind};

type gameInvitationDetails = {
  kind: 'GAME';
  targetGameId: number;
} & {kind: InvitationKind};

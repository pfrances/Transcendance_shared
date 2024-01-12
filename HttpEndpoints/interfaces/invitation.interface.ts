import {InvitationStatus} from '../types';
import {UserPublicProfile} from './UserProfileInfo.interface';

export type Invitation = {
  invitationId: number;
  sender: UserPublicProfile;
  receiver: UserPublicProfile;
  status: InvitationStatus;
} & (friendInvitationDetails | chatInvitationDetails | gameInvitationDetails);

type friendInvitationDetails = {
  kind: 'FRIEND';
};

type chatInvitationDetails = {
  kind: 'CHAT';
  targetChatId: number;
  targetChatName: string;
};

type gameInvitationDetails = {
  kind: 'GAME';
  targetGameId: number;
};

import {UserPublicProfile} from './UserProfileInfo.interface';

export type Role = 'ADMIN' | 'MEMBER';

export interface ChatParticipant {
  userProfile: UserPublicProfile;
  role: Role;
  mutedUntil: Date | null;
  blockedUntil: Date | null;
  hasLeaved: boolean;
}

export interface ChatInfo {
  chatId: number;
  name: string;
  chatAvatarUrl: string | null;
  hasPassword: boolean;
  participants: ChatParticipant[];
}

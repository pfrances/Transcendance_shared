import {UserPublicProfile} from './UserProfileInfo.interface';

export type Role = 'OWNER' | 'ADMIN' | 'MEMBER';

export interface ChatParticipation {
  userId: number;
  role: Role;
  mutedUntil: Date | null;
}

export interface ChatOverview {
  chatId: number;
  chatName: string;
  chatAvatarUrl: string | null;
  hasPassword: boolean;
  participation: ChatParticipation | null;
  isPrivate: boolean;
}

export interface ChatMessage {
  senderId: number;
  nickname: string;
  avatarUrl: string | null;
  messageId: number;
  createdAt: Date;
  messageContent: string;
}

export interface DirectMessage {
  senderId: number;
  messageId: number;
  createdAt: Date;
  messageContent: string;
}

export interface DirectMessageInfo {
  userProfile: UserPublicProfile;
  messages: DirectMessage[];
}

export interface ChatInfo {
  chatOverview: ChatOverview;
  chatMessages: ChatMessage[];
  otherParticipations: ChatParticipation[];
}

export type Role = 'ADMIN' | 'MEMBER';

export interface ChatParticipation {
  role: Role;
  mutedUntil: Date | null;
  blockedUntil: Date | null;
  hasLeaved: boolean;
}

export interface ChatOverview {
  chatId: number;
  name: string;
  chatAvatarUrl: string | null;
  hasPassword: boolean;
  participation: ChatParticipation | null;
}

export interface ChatMessage {
  senderId: number;
  nickname: string;
  avatarUrl: string | null;
  messageId: number;
  createdAt: Date;
  messageContent: string;
}

export interface ChatInfo {
  chatOverview: ChatOverview;
  chatMessages: ChatMessage[];
}

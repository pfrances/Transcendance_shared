export type Role = 'ADMIN' | 'MEMBER';

export interface ChatParticipation {
  userId: number;
  role: Role;
  mutedUntil: Date | null;
  blockedUntil: Date | null;
}

export interface ChatOverview {
  chatId: number;
  chatName: string;
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

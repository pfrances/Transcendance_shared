import {HttpChatEndPointBase} from '.';
import {HttpMethod} from '../enum';
import {Role, UserPublicProfile} from '../interfaces';

export namespace HttpGetAllMessage {
  export const method = HttpMethod.GET;
  export const endPoint = '/allMessages/:chatId';
  export const getEndPoint = (chatId: number) => `/allMessages/${chatId}`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpChatEndPointBase}${getEndPoint(chatId)}`;

  export class resTemplate {
    participants: {
      userProfile: UserPublicProfile;
      role: Role;
      mutedUntil?: Date;
      blockedUntil?: Date;
      hasLeaved: boolean;
    }[];
    messages: {
      userId: number;
      messageId: number;
      createdAt: Date;
      messageContent: string;
    }[];
  }
}

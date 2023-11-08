import {HttpChatEndPointBase} from '.';
import {HttpMethod} from '../enum';
import {ChatInfo, Role, UserPublicProfile} from '../interfaces';

export namespace HttpJoinChat {
  export const method = HttpMethod.POST;
  export const endPoint = '/join/:chatId';
  export const getEndPoint = (chatId: number) => `/join/${chatId}`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpChatEndPointBase}${getEndPoint(chatId)}`;

  export class reqTemplate {
    password?: string;
  }

  export class resTemplate implements ChatInfo {
    chatId: number;
    name: string;
    chatAvatarUrl: string;
    hasPassword: boolean;
    participants: {
      userProfile: UserPublicProfile;
      role: Role;
      mutedUntil?: Date;
      blockedUntil?: Date;
      hasLeaved: boolean;
    }[];
  }
}

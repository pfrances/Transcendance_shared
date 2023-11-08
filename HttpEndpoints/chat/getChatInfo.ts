import {HttpChatEndPointBase} from '.';
import {HttpMethod} from '../enum';
import {ChatInfo, Role, UserPublicProfile} from '../interfaces';

export namespace HttpGetChatInfo {
  export const method = HttpMethod.GET;
  export const endPoint = '/:chatId';
  export const getEndPoint = (chatId: number) => `/${chatId}`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpChatEndPointBase}${getEndPoint(chatId)}`;

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

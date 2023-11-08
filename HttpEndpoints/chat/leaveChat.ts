import {HttpChatEndPointBase} from '.';
import {HttpMethod} from '../enum';
import {ChatInfo, Role, UserPublicProfile} from '../interfaces';

export namespace HttpLeaveChat {
  export const method = HttpMethod.POST;
  export const endPoint = '/leave/:chatId';
  export const getEndPoint = (chatId: number) => `/leave/${chatId}`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpChatEndPointBase}${getEndPoint(chatId)}`;

  export class reqTemplate {}

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

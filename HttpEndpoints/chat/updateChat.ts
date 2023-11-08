import {HttpChatEndPointBase} from '.';
import {HttpMethod} from '../enum';
import {ChatInfo, Role, UserPublicProfile} from '../interfaces';

export namespace HttpUpdateChat {
  export const method = HttpMethod.PATCH;
  export const endPoint = '/update/:chatId';
  export const getEndPoint = (chatId: number) => `/update/${chatId}`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpChatEndPointBase}${getEndPoint(chatId)}`;

  export class reqTemplate {
    name?: string;
    password?: string;
    chatAvatarUrl?: string;
    participants?: {
      userId: number;
      targetRole?: Role;
      muteUntil?: Date;
      blockUntil?: Date;
      kick?: boolean;
    }[];
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

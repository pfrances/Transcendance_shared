import {HttpChatEndPointBase} from '.';
import {HttpMethod} from '../enum';
import {ChatInfo, Role, UserPublicProfile} from '../interfaces';

export namespace HttpCreateChat {
  export const method = HttpMethod.POST;
  export const endPoint = '/create';
  export const endPointFull = `${HttpChatEndPointBase}${endPoint}`;

  export class reqTemplate {
    name: string;
    chatAvatarUrl?: string;
    password?: string;
  }

  export class resTemplate implements ChatInfo {
    chatId: number;
    name: string;
    chatAvatarUrl?: string;
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

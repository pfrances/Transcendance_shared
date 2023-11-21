import {HttpChatEndPointBase} from '.';
import {HttpMethod} from '../enum';
import {ChatInfo, Role, UserPublicProfile} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpCreateChat {
  export const method = HttpMethod.POST;
  export const endPoint = '/create';
  export const endPointFull = `${HttpChatEndPointBase}${endPoint}`;

  export class reqTemplate {
    name: string;
    chatAvatarUrl?: string;
    password?: string;

    constructor(dto: reqTemplate) {
      this.name = dto.name;
      this.chatAvatarUrl = dto.chatAvatarUrl;
      this.password = dto.password;
    }
  }

  export class resTemplate {
    chatId: number;
    name: string;
    chatAvatarUrl: string | null;
    hasPassword: boolean;
    participants: {
      userProfile: UserPublicProfile;
      role: Role;
      mutedUntil: Date | null;
      blockedUntil: Date | null;
      hasLeaved: boolean;
    }[];

    constructor(chatInfo: ChatInfo) {
      this.chatId = chatInfo.chatId;
      this.name = chatInfo.name;
      this.chatAvatarUrl = chatInfo.chatAvatarUrl;
      this.hasPassword = chatInfo.hasPassword;
      this.participants = chatInfo.participants;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(req: reqTemplate, authToken: string) {
      super(endPointFull, method, req, resTemplate, authToken);
    }
  }
}

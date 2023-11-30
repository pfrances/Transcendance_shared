import {HttpEndPointBase, HttpMethod} from '../enum';
import {ChatInfo, ChatParticipant, Role} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpUpdateChat {
  export const method = HttpMethod.PATCH;
  export const endPoint = '/update/:chatId';
  export const getEndPoint = (chatId: number) => `/update/${chatId}`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpEndPointBase.CHAT}${getEndPoint(chatId)}`;

  export class reqTemplate {
    public readonly name?: string;
    public readonly password?: string;
    public readonly chatAvatarUrl?: string;
    public readonly participants?: {
      userId: number;
      targetRole?: Role;
      muteUntil?: Date;
      blockUntil?: Date;
      kick?: boolean;
    }[];

    constructor(data: HttpUpdateChat.reqTemplate) {
      this.name = data.name;
      this.password = data.password;
      this.chatAvatarUrl = data.chatAvatarUrl;
      this.participants = data.participants;
    }
  }

  export class resTemplate {
    chatId: number;
    name: string;
    chatAvatarUrl: string | null;
    hasPassword: boolean;
    participants: ChatParticipant[];

    constructor(chatInfo: ChatInfo) {
      this.chatId = chatInfo.chatId;
      this.name = chatInfo.name;
      this.chatAvatarUrl = chatInfo.chatAvatarUrl;
      this.hasPassword = chatInfo.hasPassword;
      this.participants = chatInfo.participants;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(chatId: number, req: reqTemplate, authToken: string) {
      super(getEndPointFull(chatId), method, req, resTemplate, authToken);
    }
  }
}

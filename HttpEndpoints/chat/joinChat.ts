import {HttpEndPointBase, HttpMethod} from '../enum';
import {ChatInfo, ChatParticipant} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpJoinChat {
  export const method = HttpMethod.POST;
  export const endPoint = '/join/:chatId';
  export const getEndPoint = (chatId: number) => `/join/${chatId}`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpEndPointBase.CHAT}${getEndPoint(chatId)}`;

  export class reqTemplate {
    public readonly password?: string;

    constructor(password?: string) {
      this.password = password;
    }
  }

  export class resTemplate {
    public readonly chatId: number;
    public readonly name: string;
    public readonly chatAvatarUrl: string | null;
    public readonly hasPassword: boolean;
    public readonly participants: ChatParticipant[];

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

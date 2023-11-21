import {HttpEndPointBase, HttpMethod} from '../enum';
import {ChatInfo, ChatParticipant} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetChatInfo {
  export const method = HttpMethod.GET;
  export const endPoint = '/:chatId';
  export const getEndPoint = (chatId: number) => `/${chatId}`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpEndPointBase.CHAT}${getEndPoint(chatId)}`;

  export class reqTemplate {}

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
    constructor(chatId: number, authToken: string) {
      super(getEndPointFull(chatId), method, reqTemplate, resTemplate, authToken);
    }
  }
}

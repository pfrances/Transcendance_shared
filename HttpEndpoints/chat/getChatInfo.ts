import {HttpEndPointBase, HttpMethod} from '../enum';
import {ChatInfo, ChatMessage, ChatOverview, ChatParticipation} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetChatInfo {
  export const method = HttpMethod.GET;
  export const endPoint = '/:chatId';
  export const getEndPoint = (chatId: number) => `/${chatId}`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpEndPointBase.CHAT}${getEndPoint(chatId)}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly chatOverview: ChatOverview;
    public readonly chatMessages: ChatMessage[];
    public readonly otherParticipations: ChatParticipation[];

    constructor(chatInfo: ChatInfo) {
      this.chatOverview = chatInfo.chatOverview;
      this.chatMessages = chatInfo.chatMessages;
      this.otherParticipations = chatInfo.otherParticipations;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(chatId: number) {
      super(getEndPointFull(chatId), method, reqTemplate, resTemplate);
    }
  }
}

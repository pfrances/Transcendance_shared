import {HttpEndPointBase, HttpMethod} from '../enum';
import {ChatInfo} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetAllChats {
  export const method = HttpMethod.GET;
  export const endPoint = '/';
  export const endPointFull = `${HttpEndPointBase.CHAT}${endPoint}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly chats: ChatInfo[];

    constructor(chatInfo: ChatInfo[]) {
      this.chats = chatInfo;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(authToken: string) {
      super(endPointFull, method, reqTemplate, resTemplate, authToken);
    }
  }
}

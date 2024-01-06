import {HttpEndPointBase, HttpMethod} from '../enum';
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

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(chatId: number, req: reqTemplate) {
      super(getEndPointFull(chatId), method, req, resTemplate);
    }
  }
}

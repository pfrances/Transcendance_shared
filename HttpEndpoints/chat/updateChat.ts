import {HttpEndPointBase, HttpMethod} from '../enum';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpUpdateChat {
  export const method = HttpMethod.PATCH;
  export const endPoint = '/update/:chatId';
  export const getEndPoint = (chatId: number) => `/update/${chatId}`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpEndPointBase.CHAT}${getEndPoint(chatId)}`;

  export class reqTemplate {
    public readonly chatName?: string;
    public readonly password?: string | null;
    public readonly chatAvatar?: File;

    constructor(data: HttpUpdateChat.reqTemplate) {
      this.chatName = data.chatName;
      this.password = data.password;
      this.chatAvatar = data.chatAvatar;
    }
  }

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(chatId: number, req: reqTemplate) {
      super(getEndPointFull(chatId), method, req, resTemplate);
    }
  }
}

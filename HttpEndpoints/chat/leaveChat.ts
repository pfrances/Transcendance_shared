import {HttpEndPointBase, HttpMethod} from '../enum';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpLeaveChat {
  export const method = HttpMethod.POST;
  export const endPoint = '/leave/:chatId';
  export const getEndPoint = (chatId: number) => `/leave/${chatId}`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpEndPointBase.CHAT}${getEndPoint(chatId)}`;

  export class reqTemplate {}

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(chatId: number) {
      super(getEndPointFull(chatId), method, reqTemplate, resTemplate);
    }
  }
}

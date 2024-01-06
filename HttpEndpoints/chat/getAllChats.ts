import {HttpEndPointBase, HttpMethod} from '../enum';
import {ChatOverview} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetAllChats {
  export const method = HttpMethod.GET;
  export const endPoint = '/';
  export const endPointFull = `${HttpEndPointBase.CHAT}${endPoint}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly chats: ChatOverview[];

    constructor(chats: ChatOverview[]) {
      this.chats = chats;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor() {
      super(endPointFull, method, reqTemplate, resTemplate);
    }
  }
}

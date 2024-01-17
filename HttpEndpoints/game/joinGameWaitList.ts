import {HttpEndPointBase, HttpMethod} from '../enum';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGameJoinWaitList {
  export const method = HttpMethod.POST;
  export const endPoint = '/join/';
  export const endPointFull = `${HttpEndPointBase.GAME}${endPoint}`;

  export class reqTemplate {}

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor() {
      super(endPointFull, method, reqTemplate, resTemplate);
    }
  }
}

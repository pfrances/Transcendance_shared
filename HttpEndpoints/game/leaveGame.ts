import {HttpEndPointBase, HttpMethod} from '../enum';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpLeaveGame {
  export const method = HttpMethod.DELETE;
  export const endPoint = '/leave/';
  export const endPointFull = `${HttpEndPointBase.GAME}${endPoint}`;

  export class reqTemplate {}

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor() {
      super(endPointFull, method, reqTemplate, resTemplate);
    }
  }
}

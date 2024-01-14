import {HttpEndPointBase, HttpMethod} from '../enum';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpUnblockUser {
  export const method = HttpMethod.DELETE;
  export const endPoint = '/block/:userId/';
  export const getEndPoint = (userId: number) => `/block/${userId}`;
  export const getEndPointFull = (userId: number) =>
    `${HttpEndPointBase.USER}${getEndPoint(userId)}`;

  export class reqTemplate {}

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(userId: number) {
      super(getEndPointFull(userId), method, reqTemplate, resTemplate);
    }
  }
}

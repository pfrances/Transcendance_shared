import {HttpEndPointBase, HttpMethod} from '../enum';
import {GameHistory} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetMatchHistory {
  export const method = HttpMethod.GET;
  export const endPoint = '/history/:userId';
  export const getEndpoint = (userId: number) => `/history/${userId}`;
  export const getEndPointFull = (userId: number) =>
    `${HttpEndPointBase.GAME}${getEndpoint(userId)}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly plays: GameHistory[];

    constructor({plays}: resTemplate) {
      this.plays = plays;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(userId: number) {
      super(getEndPointFull(userId), method, reqTemplate, resTemplate);
    }
  }
}

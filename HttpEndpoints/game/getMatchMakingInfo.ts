import {HttpEndPointBase, HttpMethod} from '../enum';
import {GameMatchMakingInfo, GameMatchMakingStatus} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetMatchMakingInfo {
  export const method = HttpMethod.GET;
  export const endPoint = '/matchmaking/';
  export const endPointFull = `${HttpEndPointBase.GAME}${endPoint}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly lastGameId?: number;
    public readonly status: GameMatchMakingStatus;
    public readonly gameInCreationId?: number;
    public readonly gameId?: number;

    constructor({status, gameId, gameInCreationId, lastGameId}: GameMatchMakingInfo) {
      this.status = status;
      this.gameId = gameId;
      this.gameInCreationId = gameInCreationId;
      this.lastGameId = lastGameId;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor() {
      super(endPointFull, method, reqTemplate, resTemplate);
    }
  }
}

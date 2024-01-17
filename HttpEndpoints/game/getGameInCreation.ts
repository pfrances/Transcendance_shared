import {HttpEndPointBase, HttpMethod} from '../enum';
import {GameInCreationData} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetGameInCreation {
  export const method = HttpMethod.GET;
  export const endPoint = '/creation/:gameInCreationId';
  export const getEndpoint = (gameInCreationId: number) => `/creation/${gameInCreationId}`;
  export const getEndPointFull = (gameInCreationId: number) =>
    `${HttpEndPointBase.GAME}${getEndpoint(gameInCreationId)}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly gameInCreation: GameInCreationData;

    constructor(gameInCreation: GameInCreationData) {
      this.gameInCreation = gameInCreation;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(gameInCreationId: number) {
      super(getEndPointFull(gameInCreationId), method, reqTemplate, resTemplate);
    }
  }
}

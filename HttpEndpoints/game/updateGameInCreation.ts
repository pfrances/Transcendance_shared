import {HttpEndPointBase, HttpMethod} from '../enum';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGameUpdateInCreation {
  export const method = HttpMethod.PATCH;
  export const endPoint = '/creation/update/:gameInCreationId';
  export const getEndpoint = (gameInCreationId: number) => `/creation/update/${gameInCreationId}`;
  export const getEndPointFull = (gameInCreationId: number) =>
    `${HttpEndPointBase.GAME}${getEndpoint(gameInCreationId)}`;

  export class reqTemplate {
    public readonly scoreToWin: number;

    constructor({scoreToWin}: reqTemplate) {
      this.scoreToWin = scoreToWin;
    }
  }

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(gameInCreationId: number, req: reqTemplate) {
      super(getEndPointFull(gameInCreationId), method, req, resTemplate);
    }
  }
}

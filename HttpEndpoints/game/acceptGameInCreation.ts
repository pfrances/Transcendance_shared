import {HttpEndPointBase, HttpMethod} from '../enum';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGameAcceptInCreation {
  export const method = HttpMethod.PATCH;
  export const endPoint = '/creation/accept/:gameInCreationId';
  export const getEndpoint = (gameInCreationId: number) => `/creation/accept/${gameInCreationId}`;
  export const getEndPointFull = (gameInCreationId: number) =>
    `${HttpEndPointBase.GAME}${getEndpoint(gameInCreationId)}`;

  export class reqTemplate {
    public readonly hasAccepted: boolean;

    constructor({hasAccepted}: reqTemplate) {
      this.hasAccepted = hasAccepted;
    }
  }

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(gameInCreationId: number, req: reqTemplate) {
      super(getEndPointFull(gameInCreationId), method, req, resTemplate);
    }
  }
}

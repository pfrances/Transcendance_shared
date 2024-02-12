import {ARequestSender} from '../interfaces/ARequestSender';
import {HttpMethod, HttpEndPointBase} from '../enum';
import {JwtData} from '../types';

export namespace HttpRefresh {
  export const method = HttpMethod.POST;
  export const endPoint = '/refresh';
  export const endPointFull = `${HttpEndPointBase.AUTH}${endPoint}`;

  export class reqTemplate {
    public readonly authToken: string;
    public readonly refreshToken: string;

    constructor({authToken, refreshToken}: reqTemplate) {
      this.authToken = authToken;
      this.refreshToken = refreshToken;
    }
  }

  export class resTemplate {
    public readonly authToken: JwtData;
    public readonly refreshToken: JwtData;

    constructor({authToken, refreshToken}: resTemplate) {
      this.authToken = authToken;
      this.refreshToken = refreshToken;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(req: reqTemplate) {
      super(endPointFull, method, req, resTemplate);
    }
  }
}

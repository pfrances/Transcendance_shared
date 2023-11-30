import {ARequestSender} from '../interfaces/ARequestSender';
import {HttpMethod, HttpEndPointBase} from '../enum';

export namespace HttpSignIn {
  export const method = HttpMethod.POST;
  export const endPoint = '/signin';
  export const endPointFull = `${HttpEndPointBase.AUTH}${endPoint}`;

  export class reqTemplate {
    public readonly nickname: string;
    public readonly password: string;

    constructor({nickname, password}: reqTemplate) {
      this.nickname = nickname;
      this.password = password;
    }
  }

  export class resTemplate {
    public readonly authToken: string;

    constructor({authToken}: resTemplate) {
      this.authToken = authToken;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(req: reqTemplate) {
      super(endPointFull, method, req, resTemplate);
    }
  }
}

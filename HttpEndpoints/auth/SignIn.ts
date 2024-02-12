import {ARequestSender} from '../interfaces/ARequestSender';
import {HttpMethod, HttpEndPointBase} from '../enum';
import {JwtData} from '../types';

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
    public readonly userId: number;
    public readonly auth2FACode?: string;
    public readonly authToken?: JwtData;
    public readonly refreshToken?: JwtData;

    constructor(dto: resTemplate) {
      this.userId = dto.userId;
      this.auth2FACode = dto.auth2FACode;
      this.authToken = dto.authToken;
      this.refreshToken = dto.refreshToken;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(req: reqTemplate) {
      super(endPointFull, method, req, resTemplate);
    }
  }
}

import {HttpEndPointBase, HttpMethod} from '../enum';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpSignUp {
  export const method = HttpMethod.POST;
  export const endPoint = '/signup';
  export const endPointFull = `${HttpEndPointBase.AUTH}${endPoint}`;

  export class reqTemplate {
    public readonly nickname: string;
    public readonly email: string;
    public readonly password: string;
    public readonly avatar?: File;

    constructor(dto: reqTemplate) {
      this.nickname = dto.nickname;
      this.email = dto.email;
      this.password = dto.password;
      this.avatar = dto.avatar;
    }
  }

  export class resTemplate {
    public readonly userId: number;
    public readonly auth2FACode: string;

    constructor(dto: resTemplate) {
      this.userId = dto.userId;
      this.auth2FACode = dto.auth2FACode;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(req: reqTemplate) {
      super(endPointFull, method, req, resTemplate);
    }
  }
}

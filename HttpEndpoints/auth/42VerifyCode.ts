import {HttpMethod, HttpEndPointBase} from '../enum';
import {UserPrivateProfile} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';
import {JwtData} from '../types';

export namespace HttpAuth42VerifyCode {
  export const method = HttpMethod.POST;
  export const endPoint = '/42/verifyCode/';
  export const endPointFull = `${HttpEndPointBase.AUTH}${endPoint}`;

  export class reqTemplate {
    public readonly code: string;
    public readonly userId: number;

    constructor({code, userId}: reqTemplate) {
      this.code = code;
      this.userId = userId;
    }
  }

  export class resTemplate {
    public readonly userInfo: UserPrivateProfile;
    public readonly authToken: JwtData;
    public readonly refreshToken: JwtData;

    constructor(dto: resTemplate) {
      this.userInfo = dto.userInfo;
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

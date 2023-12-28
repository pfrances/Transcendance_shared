import {ARequestSender} from '../interfaces/ARequestSender';
import {HttpMethod, HttpEndPointBase} from '../enum';
import {UserPrivateProfile} from '../interfaces';

export namespace Http2FA {
  export const method = HttpMethod.POST;
  export const endPoint = '/2fa';
  export const endPointFull = `${HttpEndPointBase.AUTH}${endPoint}`;

  export class reqTemplate {
    public readonly auth2FACode: string;
    public readonly auth2FAConfirmCode: string;
    public readonly userId: number;

    constructor({auth2FACode, auth2FAConfirmCode, userId}: reqTemplate) {
      this.auth2FACode = auth2FACode;
      this.auth2FAConfirmCode = auth2FAConfirmCode;
      this.userId = userId;
    }
  }

  export class resTemplate {
    public readonly authToken: string;
    public readonly userInfo: UserPrivateProfile;

    constructor(dto: resTemplate) {
      this.authToken = dto.authToken;
      this.userInfo = dto.userInfo;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(req: reqTemplate) {
      super(endPointFull, method, req, resTemplate);
    }
  }
}

import {ARequestSender} from '../interfaces/ARequestSender';
import {HttpMethod, HttpEndPointBase} from '../enum';

export namespace HttpResend2FA {
  export const method = HttpMethod.POST;
  export const endPoint = '/resend_2fa';
  export const endPointFull = `${HttpEndPointBase.AUTH}${endPoint}`;

  export class reqTemplate {
    public readonly auth2FACode: string;
    public readonly userId: number;

    constructor(dto: reqTemplate) {
      this.auth2FACode = dto.auth2FACode;
      this.userId = dto.userId;
    }
  }

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(req: reqTemplate) {
      super(endPointFull, method, req, resTemplate);
    }
  }
}

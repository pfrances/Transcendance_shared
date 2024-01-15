import {HttpEndPointBase, HttpMethod} from '../enum';
import {UserPrivateProfile} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetMe {
  export const method = HttpMethod.GET;
  export const endPoint = '/me';
  export const endPointFull = `${HttpEndPointBase.USER}${endPoint}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly userId: number;
    public readonly nickname: string;
    public readonly email: string;
    public readonly avatarUrl: string | null;
    public readonly hasSet2Fa: boolean;

    constructor({userId, nickname, email, avatarUrl, hasSet2Fa}: UserPrivateProfile) {
      this.userId = userId;
      this.nickname = nickname;
      this.email = email;
      this.avatarUrl = avatarUrl;
      this.hasSet2Fa = hasSet2Fa;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor() {
      super(endPointFull, method, reqTemplate, resTemplate);
    }
  }
}

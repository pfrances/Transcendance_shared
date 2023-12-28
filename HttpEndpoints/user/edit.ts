import {HttpEndPointBase, HttpMethod} from '../enum';
import {UserPrivateProfile} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpEditMe {
  export const method = HttpMethod.PATCH;
  export const endPoint = '/edit';
  export const endPointFull = `${HttpEndPointBase.USER}${endPoint}`;

  export class reqTemplate {
    public readonly email?: string;
    public readonly nickname?: string;
    public readonly avatarUrl?: string;
    public readonly password?: string;
    constructor({email, nickname, avatarUrl, password}: reqTemplate) {
      if (!email && !nickname && !avatarUrl && !password) throw new Error('empty body not allowed');
      this.email = email;
      this.nickname = nickname;
      this.avatarUrl = avatarUrl;
      this.password = password;
    }
  }

  export class resTemplate {
    public readonly userId: number;
    public readonly nickname: string;
    public readonly email: string;
    public readonly avatarUrl: string | null;

    constructor({userId, nickname, email, avatarUrl}: UserPrivateProfile) {
      this.userId = userId;
      this.nickname = nickname;
      this.email = email;
      this.avatarUrl = avatarUrl;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(req: reqTemplate) {
      super(endPointFull, method, req, resTemplate);
    }
  }
}

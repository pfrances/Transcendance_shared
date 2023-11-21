import {HttpEndPointBase, HttpMethod} from '../enum';
import {UserPublicProfile} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpEditMe {
  export const method = HttpMethod.PATCH;
  export const endPoint = '/edit';
  export const endPointFull = `${HttpEndPointBase.USER}${endPoint}`;

  export class reqTemplate {
    public email?: string;
    public nickname?: string;
    public avatarUrl?: string;
    public password?: string;
    constructor({email, nickname, avatarUrl, password}: reqTemplate) {
      if (!email && !nickname && !avatarUrl && !password) throw new Error('empty body not allowed');
      this.email = email;
      this.nickname = nickname;
      this.avatarUrl = avatarUrl;
      this.password = password;
    }
  }

  export class resTemplate {
    public userId: number;
    public nickname: string;
    public avatarUrl: string | null;

    constructor({userId, nickname, avatarUrl}: UserPublicProfile) {
      this.userId = userId;
      this.nickname = nickname;
      this.avatarUrl = avatarUrl;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(req: reqTemplate, authToken: string) {
      super(endPointFull, method, req, resTemplate, authToken);
    }
  }
}

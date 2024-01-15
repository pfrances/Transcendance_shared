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
    public readonly avatar?: File;
    public readonly password?: string;
    public readonly hasSet2Fa?: boolean;

    constructor({email, nickname, avatar, password, hasSet2Fa}: reqTemplate) {
      if (!email && !nickname && !avatar && !password && !hasSet2Fa)
        throw new Error('empty body not allowed');
      this.email = email;
      this.nickname = nickname;
      this.avatar = avatar;
      this.password = password;
      this.hasSet2Fa = hasSet2Fa;
    }
  }

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
    constructor(req: reqTemplate) {
      super(endPointFull, method, req, resTemplate);
    }
  }
}

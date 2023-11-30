import {HttpEndPointBase, HttpMethod} from '../enum';
import {UserPublicProfile} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetMe {
  export const method = HttpMethod.GET;
  export const endPoint = '/me';
  export const endPointFull = `${HttpEndPointBase.USER}${endPoint}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly userId: number;
    public readonly nickname: string;
    public readonly avatarUrl: string | null;

    constructor({userId, nickname, avatarUrl}: UserPublicProfile) {
      this.userId = userId;
      this.nickname = nickname;
      this.avatarUrl = avatarUrl;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(authToken: string) {
      super(endPointFull, method, reqTemplate, resTemplate, authToken);
    }
  }
}

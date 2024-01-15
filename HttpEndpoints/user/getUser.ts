import {HttpEndPointBase, HttpMethod} from '../enum';
import {UserPublicProfileRegardingMe} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetUser {
  export const method = HttpMethod.GET;
  export const endPoint = '/:userId/';
  export const getEndPoint = (userId: number) => `/${userId}`;
  export const getEndPointFull = (userId: number) =>
    `${HttpEndPointBase.USER}${getEndPoint(userId)}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly userId: number;
    public readonly nickname: string;
    public readonly avatarUrl: string | null;
    public readonly isOnline: boolean;
    public readonly isBlocked: boolean;
    public readonly isFriend: boolean;
    public readonly status: string;

    constructor({
      userId,
      nickname,
      avatarUrl,
      isOnline,
      isBlocked,
      isFriend,
      status,
    }: UserPublicProfileRegardingMe) {
      this.userId = userId;
      this.nickname = nickname;
      this.avatarUrl = avatarUrl;
      this.isOnline = isOnline;
      this.isBlocked = isBlocked;
      this.isFriend = isFriend;
      this.status = status;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(userId: number) {
      super(getEndPointFull(userId), method, reqTemplate, resTemplate);
    }
  }
}

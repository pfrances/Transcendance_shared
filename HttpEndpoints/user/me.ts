import {HttpUserEndPointBase} from '.';
import {HttpMethod} from '../enum';
import {UserPublicProfile} from '../interfaces';

export namespace HttpGetMe {
  export const method = HttpMethod.GET;
  export const endPoint = '/me';
  export const endPointFull = `${HttpUserEndPointBase}${endPoint}`;

  export class resTemplate implements UserPublicProfile {
    userId: number;
    nickname: string;
    avatarUrl: string;
  }
}

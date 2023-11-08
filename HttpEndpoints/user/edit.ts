import {HttpUserEndPointBase} from '.';
import {HttpMethod} from '../enum';
import {UserPublicProfile} from '../interfaces';

export namespace HttpEditMe {
  export const method = HttpMethod.PATCH;
  export const endPoint = '/remove';
  export const endPointFull = `${HttpUserEndPointBase}${endPoint}`;

  export class reqTemplate {
    email?: string;
    nickname?: string;
    avatarUrl?: string;
    password?: string;
  }

  export class resTemplate implements UserPublicProfile {
    userId: number;
    nickname: string;
    avatarUrl: string;
  }
}

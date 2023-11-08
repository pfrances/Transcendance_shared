import {UserPublicProfile} from '../interfaces';
import {HttpAuthEndPointBase} from '.';
import {HttpMethod} from '../enum';

export namespace HttpSignUp {
  export const method = HttpMethod.POST;
  export const endPoint = '/signup';
  export const endPointFull = `${HttpAuthEndPointBase}${endPoint}`;

  export class reqTemplate {
    nickname: string;
    email: string;
    password: string;
    avatarUrl?: string;
  }

  export class resTemplate implements UserPublicProfile {
    userId: number;
    nickname: string;
    avatarUrl: string;
  }
}

import {HttpAuthEndPointBase} from '.';
import {HttpMethod} from '../enum';

export namespace HttpSignIn {
  export const method = HttpMethod.POST;
  export const endPoint = '/signin';
  export const endPointFull = `${HttpAuthEndPointBase}${endPoint}`;

  export class reqTemplate {
    nickname: string;
    password: string;
  }

  export class resTemplate {
    authToken: string;
  }
}

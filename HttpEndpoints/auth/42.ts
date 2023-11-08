import {HttpAuthEndPointBase} from '.';
import {HttpMethod} from '../enum';

export namespace HttpAuth42 {
  export const method = HttpMethod.GET;
  export const endPoint = '/42';
  export const endPoint_CB = '/42/cb';
  export const endPointFull = `${HttpAuthEndPointBase}${endPoint}`;

  /* /auth/42 -(redirect)-> API42 -(redirect)-> /auth/42/cb ⇩ response */
  export class resTemplate {
    authToken: string;
  }
}

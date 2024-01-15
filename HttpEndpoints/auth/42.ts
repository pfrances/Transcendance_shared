import {HttpMethod, HttpEndPointBase} from '../enum';

export namespace HttpAuth42 {
  export const method = HttpMethod.GET;
  export const endPoint = '/42';
  export const endPointFull = `${HttpEndPointBase.AUTH}${endPoint}`;
  export const endPoint_CB = '/42/cb';
  export const endPointFull_CB = `${HttpEndPointBase.AUTH}${endPoint_CB}`;

  export class reqTemplate {}

  export class resTemplate {} //redirect to front auth
}

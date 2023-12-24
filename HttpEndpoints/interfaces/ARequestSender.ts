import {HttpMethod} from '../enum';
import {Http} from '..';

export abstract class ARequestSender<
  reqTemplate extends Http.reqTemplate,
  resTemplate extends Http.resTemplate,
> {
  public readonly baseUrl = 'http://localhost:3333';
  public readonly endpoint: string;
  public readonly method: HttpMethod;
  public readonly req: reqTemplate;
  public readonly resCtr: new (resBody: resTemplate) => resTemplate;

  constructor(
    endpoint: string,
    method: HttpMethod,
    req: reqTemplate,
    resCtr: new (resBody: any) => resTemplate,
  ) {
    this.endpoint = endpoint;
    this.method = method;
    this.req = req;
    this.resCtr = resCtr;
  }
}

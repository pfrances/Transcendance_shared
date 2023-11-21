import axios, {AxiosRequestConfig} from 'axios';
import {HttpMethod} from '../enum';
import {Http} from '..';

export abstract class ARequestSender<
  reqTemplate = Http.reqTemplate,
  resTemplate = Http.resTemplate,
> {
  private baseUrl = 'http://localhost:3333';
  private endpoint: string;
  private method: HttpMethod;
  private req: reqTemplate;
  private authToken?: string;
  private resCtr: new (resBody: resTemplate) => resTemplate;

  public async sendRequest(): Promise<resTemplate> | never {
    const options: AxiosRequestConfig = {
      method: this.method,
      baseURL: this.baseUrl,
      url: this.endpoint,
      data: this.req,
    };
    if (this.authToken) options.headers = {Authorization: `Bearer ${this.authToken}`};
    const res = await axios(options);
    if (res.data.error) throw new Error(res.data.error);
    return new this.resCtr(res.data);
  }

  constructor(
    endpoint: string,
    method: HttpMethod,
    req: reqTemplate,
    resCtr: new (resBody: any) => resTemplate,
    authToken?: string,
  ) {
    this.endpoint = endpoint;
    this.method = method;
    this.req = req;
    this.resCtr = resCtr;
    if (authToken) this.authToken = authToken;
  }
}

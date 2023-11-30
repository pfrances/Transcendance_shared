import axios, {AxiosRequestConfig} from 'axios';
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
  public readonly authToken?: string;
  public readonly resCtr: new (resBody: resTemplate) => resTemplate;

  public async sendRequest(): Promise<resTemplate> | never {
    const options: AxiosRequestConfig = {
      method: this.method,
      baseURL: this.baseUrl,
      url: this.endpoint,
      data: this.req,
    };
    if (this.authToken) options.headers = {Authorization: `Bearer ${this.authToken}`};
    try {
      const res = await axios(options);
      return new this.resCtr(res.data);
    } catch (err) {
      if (axios.isAxiosError(err)) throw new Error(err?.response?.data ?? err);
      throw err;
    }
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

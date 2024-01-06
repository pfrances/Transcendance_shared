import {HttpEndPointBase, HttpMethod} from '../enum';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpCreateChat {
  export const method = HttpMethod.POST;
  export const endPoint = '/create';
  export const endPointFull = `${HttpEndPointBase.CHAT}${endPoint}`;

  export class reqTemplate {
    public readonly name: string;
    public readonly chatAvatar?: File;
    public readonly password?: string;

    constructor(dto: reqTemplate) {
      this.name = dto.name;
      this.chatAvatar = dto.chatAvatar;
      this.password = dto.password;
    }
  }

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(req: reqTemplate) {
      super(endPointFull, method, req, resTemplate);
    }
  }
}

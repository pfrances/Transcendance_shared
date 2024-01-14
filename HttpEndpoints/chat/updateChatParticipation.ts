import {HttpEndPointBase, HttpMethod} from '../enum';
import {Role} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpUpdateChatParticipation {
  export const method = HttpMethod.PATCH;
  export const endPoint = '/:chatId/participation';
  export const getEndPoint = (chatId: number) => `/${chatId}/participation`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpEndPointBase.CHAT}${getEndPoint(chatId)}`;

  export class reqTemplate {
    public readonly userId: number;
    public readonly role?: Role;
    public readonly mutedUntil?: Date | null;
    public readonly kick?: boolean;

    constructor(data: reqTemplate) {
      this.userId = data.userId;
      this.role = data.role;
      this.mutedUntil = data.mutedUntil;
      this.kick = data.kick;
    }
  }

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(chatId: number, req: reqTemplate) {
      super(getEndPointFull(chatId), method, req, resTemplate);
    }
  }
}

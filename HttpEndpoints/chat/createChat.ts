import {HttpEndPointBase, HttpMethod} from '../enum';
import {ChatOverview, ChatParticipation} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpCreateChat {
  export const method = HttpMethod.POST;
  export const endPoint = '/create';
  export const endPointFull = `${HttpEndPointBase.CHAT}${endPoint}`;

  export class reqTemplate {
    public readonly chatName: string;
    public readonly chatAvatar?: File;
    public readonly password?: string;
    public readonly isPrivate?: boolean;

    constructor(dto: reqTemplate) {
      this.chatName = dto.chatName;
      this.chatAvatar = dto.chatAvatar;
      this.password = dto.password;
    }
  }

  export class resTemplate {
    public readonly chatId: number;
    public readonly chatName: string;
    public readonly chatAvatarUrl: string | null;
    public readonly hasPassword: boolean;
    public readonly participation: ChatParticipation | null;

    constructor(chatOverView: ChatOverview) {
      this.chatId = chatOverView.chatId;
      this.chatName = chatOverView.chatName;
      this.chatAvatarUrl = chatOverView.chatAvatarUrl;
      this.hasPassword = chatOverView.hasPassword;
      this.participation = chatOverView.participation;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(req: reqTemplate) {
      super(endPointFull, method, req, resTemplate);
    }
  }
}

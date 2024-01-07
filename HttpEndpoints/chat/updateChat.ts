import {HttpEndPointBase, HttpMethod} from '../enum';
import {ChatOverview, ChatParticipation, Role} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpUpdateChat {
  export const method = HttpMethod.PATCH;
  export const endPoint = '/update/:chatId';
  export const getEndPoint = (chatId: number) => `/update/${chatId}`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpEndPointBase.CHAT}${getEndPoint(chatId)}`;

  export class reqTemplate {
    public readonly chatName?: string;
    public readonly password?: string;
    public readonly chatAvatar?: File;
    public readonly participants?: {
      userId: number;
      role?: Role;
      mutedUntil?: Date;
      blockedUntil?: Date;
      kick?: boolean;
    }[];

    constructor(data: HttpUpdateChat.reqTemplate) {
      this.chatName = data.chatName;
      this.password = data.password;
      this.chatAvatar = data.chatAvatar;
      this.participants = data.participants;
    }
  }

  export class resTemplate {
    public readonly chatId: number;
    public readonly chatName: string;
    public readonly chatAvatarUrl: string | null;
    public readonly hasPassword: boolean;
    public readonly participation: ChatParticipation | null;

    constructor(chatOverview: ChatOverview) {
      this.chatId = chatOverview.chatId;
      this.chatName = chatOverview.chatName;
      this.chatAvatarUrl = chatOverview.chatAvatarUrl;
      this.hasPassword = chatOverview.hasPassword;
      this.participation = chatOverview.participation;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(chatId: number, req: reqTemplate) {
      super(getEndPointFull(chatId), method, req, resTemplate);
    }
  }
}

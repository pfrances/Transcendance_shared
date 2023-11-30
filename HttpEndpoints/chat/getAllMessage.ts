import {HttpEndPointBase, HttpMethod} from '../enum';
import {Role, UserPublicProfile} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetAllMessage {
  export const method = HttpMethod.GET;
  export const endPoint = '/allMessages/:chatId';
  export const getEndPoint = (chatId: number) => `/allMessages/${chatId}`;
  export const getEndPointFull = (chatId: number) =>
    `${HttpEndPointBase.CHAT}${getEndPoint(chatId)}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly participants: {
      userProfile: UserPublicProfile;
      role: Role;
      mutedUntil: Date | null;
      blockedUntil: Date | null;
      hasLeaved: boolean;
    }[];
    public readonly messages: {
      userId: number;
      messageId: number;
      createdAt: Date;
      messageContent: string;
    }[];

    constructor(data: resTemplate) {
      this.participants = data.participants;
      this.messages = data.messages;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(chatId: number, authToken: string) {
      super(getEndPointFull(chatId), method, reqTemplate, resTemplate, authToken);
    }
  }
}

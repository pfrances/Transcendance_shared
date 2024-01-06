import {WsChat_FromServer} from '.';

export namespace WsChatJoin {
  export const eventName: WsChat_FromServer.eventName = 'chatJoin';

  export interface eventMessageTemplate {
    chat: {
      chatId: number;
      chatName: string;
    };
    user: {
      userId: number;
      nickname: string;
      avatarUrl: string | null;
    };
  }

  export class Dto implements WsChat_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor({chat, user}: eventMessageTemplate) {
      this.message = {chat, user};
    }
  }
}

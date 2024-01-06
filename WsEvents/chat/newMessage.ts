import {WsChat_FromServer} from '.';

export namespace WsNewMessage {
  export const eventName: WsChat_FromServer.eventName = 'newMessage';

  export interface eventMessageTemplate {
    chat: {
      chatId: number;
      chatName: string;
    };
    sender: {
      userId: number;
      nickname: string;
      avatarUrl: string | null;
    };
    message: {
      messageId: number;
      messageContent: string;
    };
  }

  export class Dto implements WsChat_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor({chat, sender, message}: eventMessageTemplate) {
      this.message = {chat, sender, message};
    }
  }
}

import {WsChat_FromServer} from '.';

export namespace WsNewMessage {
  export const eventName: WsChat_FromServer.eventName = 'newMessage';

  export interface eventMessageTemplate {
    messageId: number;
    senderId: number;
    chatId: number;
    messageContent: string;
  }

  export class Dto implements WsChat_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor({messageId, senderId, chatId, messageContent}: eventMessageTemplate) {
      this.message = {messageId, senderId, chatId, messageContent};
    }
  }
}

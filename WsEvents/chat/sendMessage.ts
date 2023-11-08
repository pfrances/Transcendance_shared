import {WsChat_FromClient} from '.';

export namespace WsSendMessage {
  export const eventName: WsChat_FromClient.eventName = 'sendMessage';

  export interface eventMessageTemplate {
    chatId: number;
    messageContent: string;
  }

  export class Dto implements WsChat_FromClient.template {
    public message: eventMessageTemplate;
    public eventName = eventName;

    constructor({chatId, messageContent}: eventMessageTemplate) {
      this.message = {chatId, messageContent};
    }
  }
}

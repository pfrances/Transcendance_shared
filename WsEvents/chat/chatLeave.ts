import {WsChat_FromServer} from '.';

export namespace WsChatLeave {
  export const eventName: WsChat_FromServer.eventName = 'chatLeave';

  export interface eventMessageTemplate {
    userId: number;
    chatId: number;
  }

  export class Dto implements WsChat_FromServer.template {
    public message: eventMessageTemplate;
    public eventName = eventName;

    constructor(message: eventMessageTemplate) {
      this.message = message;
    }
  }
}

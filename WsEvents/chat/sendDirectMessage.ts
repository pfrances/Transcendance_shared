import {WsChat_FromClient} from '.';

export namespace WsSendDirectMessage {
  export const eventName: WsChat_FromClient.eventName = 'sendDirectMessage';

  export interface eventMessageTemplate {
    userId: number;
    messageContent: string;
  }

  export class Dto implements WsChat_FromClient.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor({userId, messageContent}: eventMessageTemplate) {
      this.message = {userId, messageContent};
    }
  }
}

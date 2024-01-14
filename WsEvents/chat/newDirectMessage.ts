import {WsChat_FromServer} from '.';

export namespace WsNewDirectMessage {
  export const eventName: WsChat_FromServer.eventName = 'newDirectMessage';

  export interface eventMessageTemplate {
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

    constructor({sender, message}: eventMessageTemplate) {
      this.message = {sender, message};
    }
  }
}

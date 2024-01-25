import {WsGame_FromClient} from '.';

export namespace WsSendPlayerMove {
  export const eventName: WsGame_FromClient.eventName = 'sendPlayerMove';

  export interface eventMessageTemplate {
    gameId: number;
    direction: 'up' | 'down';
  }

  export class Dto implements WsGame_FromClient.Template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(msg: eventMessageTemplate) {
      this.message = msg;
    }
  }
}

import {WsGame_FromClient} from '.';

export namespace WsSendPlayerMove {
  export const eventName: WsGame_FromClient.eventName = 'sendPlayerMove';

  export interface eventMessageTemplate {
    gameId: number;
    paddle_pos: number;
  }

  export class Dto implements WsGame_FromClient.Template {
    public message: eventMessageTemplate;
    public eventName = eventName;

    constructor(message: eventMessageTemplate) {
      this.message = message;
    }
  }
}

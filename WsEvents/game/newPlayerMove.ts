import {WsGame_FromServer} from '.';

export namespace WsNewPlayerMove {
  export const eventName: WsGame_FromServer.eventName = 'newPlayerMove';

  export interface eventMessageTemplate {
    userId: number;
    gameId: number;
    paddle_pos: number;
  }

  export class Dto implements WsGame_FromServer.Template {
    public message: eventMessageTemplate;
    public eventName = eventName;

    constructor(message: eventMessageTemplate) {
      this.message = message;
    }
  }
}

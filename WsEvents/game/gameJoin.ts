import {WsGame_FromServer} from '.';

export namespace WsGameJoin {
  export const eventName: WsGame_FromServer.eventName = 'gameJoin';

  export interface eventMessageTemplate {
    userId: number;
    gameId: number;
  }

  export class Dto implements WsGame_FromServer.Template {
    public message: eventMessageTemplate;
    public eventName = eventName;

    constructor(message: eventMessageTemplate) {
      this.message = message;
    }
  }
}

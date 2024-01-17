import {WsGame_FromServer} from '.';

export namespace WsGameStart {
  export const eventName: WsGame_FromServer.eventName = 'gameStart';

  export interface eventMessageTemplate {
    gameId: number;
  }

  export class Dto implements WsGame_FromServer.Template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(msg: eventMessageTemplate) {
      this.message = msg;
    }
  }
}

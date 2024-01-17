import {WsGame_FromServer} from '.';

export namespace WsGameMatch {
  export const eventName: WsGame_FromServer.eventName = 'gameMatch';

  export interface eventMessageTemplate {
    gameInCreationId: number;
  }

  export class Dto implements WsGame_FromServer.Template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(msg: eventMessageTemplate) {
      this.message = msg;
    }
  }
}

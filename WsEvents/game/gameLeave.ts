import {WsGame_FromServer} from '.';

export namespace WsGameLeave {
  export const eventName: WsGame_FromServer.eventName = 'gameLeave';

  export interface eventMessageTemplate {
    userId: number;
    gameId: number;
  }

  export class Dto implements WsGame_FromServer.Template {
    public message: eventMessageTemplate;
    public eventName = eventName;

    constructor({userId, gameId}: eventMessageTemplate) {
      this.message = {userId, gameId};
    }
  }
}

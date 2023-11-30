import {WsGame_FromServer} from '.';

export namespace WsNewPlayerMove {
  export const eventName: WsGame_FromServer.eventName = 'newPlayerMove';

  export interface eventMessageTemplate {
    userId: number;
    gameId: number;
    paddle_pos: number;
  }

  export class Dto implements WsGame_FromServer.Template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor({userId, gameId, paddle_pos}: eventMessageTemplate) {
      this.message = {userId, gameId, paddle_pos};
    }
  }
}

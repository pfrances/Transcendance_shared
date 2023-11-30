import {WsGame_FromClient} from '.';

export namespace WsSendPlayerMove {
  export const eventName: WsGame_FromClient.eventName = 'sendPlayerMove';

  export interface eventMessageTemplate {
    userId: number;
    gameId: number;
    paddle_pos: number;
  }

  export class Dto implements WsGame_FromClient.Template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor({userId, gameId, paddle_pos}: eventMessageTemplate) {
      this.message = {userId, gameId, paddle_pos};
    }
  }
}

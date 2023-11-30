import {WsGame_FromServer} from '.';

export namespace WsBallPosition {
  export const eventName: WsGame_FromServer.eventName = 'ballPosition';

  export interface eventMessageTemplate {
    userId: number;
    gameId: number;
    ball_posX: number;
    ball_posY: number;
  }

  export class Dto implements WsGame_FromServer.Template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor({userId, gameId, ball_posX, ball_posY}: eventMessageTemplate) {
      this.message = {userId, gameId, ball_posX, ball_posY};
    }
  }
}

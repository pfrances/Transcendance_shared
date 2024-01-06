import {WsGame_FromServer} from '.';

export namespace WsBallPosition {
  export const eventName: WsGame_FromServer.eventName = 'ballPosition';

  export interface eventMessageTemplate {
    gameId: number;
    ball_posX: number;
    ball_posY: number;
  }

  export class Dto implements WsGame_FromServer.Template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor({gameId, ball_posX, ball_posY}: eventMessageTemplate) {
      this.message = {gameId, ball_posX, ball_posY};
    }
  }
}

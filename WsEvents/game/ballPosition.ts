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
    public message: eventMessageTemplate;
    public eventName = eventName;

    constructor(message: eventMessageTemplate) {
      this.message = message;
    }
  }
}

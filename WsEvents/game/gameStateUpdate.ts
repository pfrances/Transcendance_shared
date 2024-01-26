import {Ball, GameStatus, Player} from '../../HttpEndpoints/interfaces';
import {WsGame_FromServer} from '.';

export namespace WsGameStateUpdatePosition {
  export const eventName: WsGame_FromServer.eventName = 'gameStateUpdate';

  export interface eventMessageTemplate {
    ball: Ball;
    player1: Player;
    player2: Player;
    status: Omit<GameStatus, 'IN_CREATION'>;
    countdown?: number;
  }

  export class Dto implements WsGame_FromServer.Template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(msg: eventMessageTemplate) {
      this.message = msg;
    }
  }
}

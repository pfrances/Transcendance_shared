import {GameRules} from '../../HttpEndpoints/interfaces';
import {WsGame_FromServer} from '.';

export namespace WsGameInCreationChange {
  export const eventName: WsGame_FromServer.eventName = 'gameInCreationChange';

  export interface eventMessageTemplate {
    gameInCreationId: number;
    rules: GameRules;
  }

  export class Dto implements WsGame_FromServer.Template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(msg: eventMessageTemplate) {
      this.message = msg;
    }
  }
}

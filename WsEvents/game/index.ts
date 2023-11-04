import {WsGameJoin} from './gameJoin';
import {WsGameLeave} from './gameLeave';
import {WsNewPlayerMove} from './newPlayerMove';
import {WsBallPosition} from './ballPosition';
import {WsSendPlayerMove} from './sendPlayerMove';
import {WsEvents} from '..';

export {WsGameJoin, WsGameLeave, WsNewPlayerMove, WsBallPosition, WsSendPlayerMove};

export namespace WsGame_FromServer {
  export import gameJoin = WsGameJoin;
  export import gameLeave = WsGameLeave;
  export import newPlayerMove = WsNewPlayerMove;
  export import ballPosition = WsBallPosition;

  export type eventName = 'gameJoin' | 'gameLeave' | 'newPlayerMove' | 'ballPosition';

  export type messageTemplate =
    | gameJoin.eventMessageTemplate
    | gameLeave.eventMessageTemplate
    | newPlayerMove.eventMessageTemplate
    | ballPosition.eventMessageTemplate;

  export interface Template extends WsEvents.FromServer.template {
    eventName: eventName;
    message: messageTemplate;
  }
}

export namespace WsGame_FromClient {
  export import sendPlayerMove = WsSendPlayerMove;

  export type eventName = 'sendPlayerMove';

  export type messageTemplate = sendPlayerMove.eventMessageTemplate;

  export interface Template extends WsEvents.FromClient.template {
    eventName: eventName;
    message: messageTemplate;
  }
}

export namespace WsGame {
  export import FromServer = WsGame_FromServer;
  export import FromClient = WsGame_FromClient;

  export type eventName = FromServer.eventName | FromClient.eventName;

  export type messageTemplate = FromServer.messageTemplate | FromClient.messageTemplate;

  export interface template {
    eventName: eventName;
    message: messageTemplate;
  }
}

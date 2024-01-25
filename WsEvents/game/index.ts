import {WsGameJoin} from './gameJoin';
import {WsGameLeave} from './gameLeave';
import {WsGameStateUpdatePosition} from './gameStateUpdate';
import {WsSendPlayerMove} from './sendPlayerMove';
import {WsGameInCreationChange} from './inCreationChange';
import {WsGameMatch} from './gameMatch';
import {WsGameStart} from './gameStart';
import {WsEvents} from '..';

export {
  WsGameJoin,
  WsGameLeave,
  WsSendPlayerMove,
  WsGameStateUpdatePosition,
  WsGameInCreationChange,
  WsGameMatch,
  WsGameStart,
};

export namespace WsGame_FromServer {
  export import gameJoin = WsGameJoin;
  export import gameLeave = WsGameLeave;
  export import stateUpdate = WsGameStateUpdatePosition;
  export import gameInCreationChange = WsGameInCreationChange;
  export import gameMatch = WsGameMatch;
  export import gameStart = WsGameStart;

  export type eventName =
    | 'gameJoin'
    | 'gameLeave'
    | 'gameStateUpdate'
    | 'gameInCreationChange'
    | 'gameMatch'
    | 'gameStart';

  export type messageTemplate =
    | gameJoin.eventMessageTemplate
    | gameLeave.eventMessageTemplate
    | stateUpdate.eventMessageTemplate
    | gameInCreationChange.eventMessageTemplate
    | gameMatch.eventMessageTemplate
    | gameStart.eventMessageTemplate;

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

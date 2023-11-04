import {WsInvitation} from './invitation';
import {WsFriend} from './friend';
import {WsChat} from './chat';
import {WsGame} from './game';

export {WsInvitation, WsFriend, WsChat, WsGame};

export namespace WsEvents_FromServer {
  export import Invitation = WsInvitation.FromServer;
  export import Friend = WsFriend.FromServer;
  export import Chat = WsChat.FromServer;
  export import Game = WsGame.FromServer;

  export type eventName = Invitation.eventName | Friend.eventName | Chat.eventName | Game.eventName;

  export type messageTemplate =
    | Invitation.messageTemplate
    | Friend.messageTemplate
    | Chat.messageTemplate
    | Game.messageTemplate;

  export interface template {
    eventName: eventName;
    message: messageTemplate;
  }
}

export namespace WsEvents_FromClient {
  export import Chat = WsChat.FromClient;
  export import Game = WsGame.FromClient;

  export type eventName = Chat.eventName | Game.eventName;

  export type messageTemplate = Chat.messageTemplate | Game.messageTemplate;

  export interface template {
    eventName: eventName;
    message: messageTemplate;
  }
}

export namespace WsEvents {
  export import FromServer = WsEvents_FromServer;
  export import FromClient = WsEvents_FromClient;

  export type eventName = FromServer.eventName | FromClient.eventName;

  export type messageTemplate = FromServer.messageTemplate | FromClient.messageTemplate;

  export interface template {
    eventName: eventName;
    message: messageTemplate;
  }
}

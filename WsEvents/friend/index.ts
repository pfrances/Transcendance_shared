import {WsEvents_FromServer} from '..';
import {WsFriendConnection} from './friendConnection';
import {WsFriendDisconnection} from './friendDisconnection';
import {WsLeftFriend} from './leftFriend';
import {WsNewFriend} from './newFriend';

export {WsFriendConnection, WsFriendDisconnection, WsLeftFriend, WsNewFriend};

export namespace WsFriend_FromServer {
  export import newFriend = WsNewFriend;
  export import leftFriend = WsLeftFriend;
  export import friendConnection = WsFriendConnection;
  export import friendDisconnection = WsFriendDisconnection;

  export type eventName = 'newFriend' | 'leftFriend' | 'friendConnection' | 'friendDisconnection';

  export type messageTemplate =
    | newFriend.eventMessageTemplate
    | leftFriend.eventMessageTemplate
    | friendConnection.eventMessageTemplate
    | friendDisconnection.eventMessageTemplate;

  export interface template extends WsEvents_FromServer.template {
    eventName: eventName;
    message: messageTemplate;
  }
}

export namespace WsFriend {
  export import FromServer = WsFriend_FromServer;

  export type eventName = FromServer.eventName;

  export type messageTemplate = FromServer.messageTemplate;

  export interface template {
    eventName: eventName;
    message: messageTemplate;
  }
}

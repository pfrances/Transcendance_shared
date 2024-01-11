import {WsEvents} from '..';
import {WsUserConnection} from './userConnection';
import {WsUserProfilUpdate} from './userProfileUpdate';

export {WsUserConnection, WsUserProfilUpdate};

export namespace WsUser_FromServer {
  export import userConnection = WsUserConnection;
  export import userProfileUpdate = WsUserProfilUpdate;

  export type eventName = 'userProfileUpdate' | 'userConnection';

  export type messageTemplate =
    | WsUserConnection.eventMessageTemplate
    | WsUserProfilUpdate.eventMessageTemplate;

  export interface template extends WsEvents.FromServer.template {
    eventName: eventName;
    message: messageTemplate;
  }
}

export namespace WsUser {
  export import FromServer = WsUser_FromServer;

  export type eventName = WsUser_FromServer.eventName;

  export type messageTemplate = WsUser_FromServer.messageTemplate;

  export interface template extends WsEvents.template {
    eventName: eventName;
    message: messageTemplate;
  }
}

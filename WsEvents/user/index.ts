import {WsEvents} from '..';
import {WsUserConnection} from './userConnection';
import {WsUserProfilUpdate} from './userProfileUpdate';
import {WsUserBlocking} from './userBlocking';
import {WsSetUserStatus} from './userSetStatus';
import {WsUserStatusChange} from './userStatusChange';

export {WsUserConnection, WsUserProfilUpdate, WsUserBlocking, WsSetUserStatus, WsUserStatusChange};

export namespace WsUser_FromServer {
  export import userConnection = WsUserConnection;
  export import userProfileUpdate = WsUserProfilUpdate;
  export import userBlocking = WsUserBlocking;
  export import setUserStatus = WsSetUserStatus;

  export type eventName =
    | 'userProfileUpdate'
    | 'userConnection'
    | 'userBlocking'
    | 'setUserStatus'
    | 'userStatusChange';

  export type messageTemplate =
    | WsUserConnection.eventMessageTemplate
    | WsUserProfilUpdate.eventMessageTemplate
    | WsUserBlocking.eventMessageTemplate
    | WsSetUserStatus.eventMessageTemplate;

  export interface template extends WsEvents.FromServer.template {
    eventName: eventName;
    message: messageTemplate;
  }
}

export namespace WsUser_FromClient {
  export import setState = WsSetUserStatus;

  export type eventName = 'setUserStatus';

  export type messageTemplate = WsSetUserStatus.eventMessageTemplate;

  export interface template extends WsEvents.FromClient.template {
    eventName: eventName;
    message: messageTemplate;
  }
}

export namespace WsUser {
  export import FromServer = WsUser_FromServer;
  export import FromClient = WsUser_FromClient;

  export type eventName = WsUser_FromServer.eventName | WsUser_FromClient.eventName;

  export type messageTemplate =
    | WsUser_FromServer.messageTemplate
    | WsUser_FromClient.messageTemplate;

  export interface template extends WsEvents.template {
    eventName: eventName;
    message: messageTemplate;
  }
}

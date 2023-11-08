import {WsEvents_FromServer} from '..';
import {WsConnection} from './wsConnection';
import {WsDisconnection} from './wsDisconnection';

export {WsConnection, WsDisconnection};

export namespace WsDefault_FromServer {
  export import connection = WsConnection;
  export import disconnection = WsDisconnection;

  export type eventName = 'connect' | 'disconnect' | 'exception';

  export type messageTemplate =
    | connection.eventMessageTemplate
    | disconnection.eventMessageTemplate;

  export interface template extends WsEvents_FromServer.template {
    eventName: eventName;
    message: messageTemplate;
  }
}

export namespace WsDefault {
  export import FromServer = WsDefault_FromServer;

  export type eventName = FromServer.eventName;

  export type messageTemplate = FromServer.messageTemplate;

  export interface template {
    eventName: eventName;
    message: messageTemplate;
  }
}

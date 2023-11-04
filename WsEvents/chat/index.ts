import {WsNewMessage} from './newMessage';
import {WsSendMessage} from './sendMessage';
import {WsChatJoin} from './chatJoin';
import {WsChatLeave} from './chatLeave';
import {WsEvents} from '..';

export {WsNewMessage, WsSendMessage, WsChatJoin, WsChatLeave};

export namespace WsChat_FromServer {
  export import newMessage = WsNewMessage;
  export import chatJoin = WsChatJoin;
  export import chatLeave = WsChatLeave;

  export type eventName = 'chatJoin' | 'chatLeave' | 'newMessage';

  export type messageTemplate =
    | newMessage.eventMessageTemplate
    | chatJoin.eventMessageTemplate
    | chatLeave.eventMessageTemplate;

  export interface template extends WsEvents.FromServer.template {
    eventName: eventName;
    message: messageTemplate;
  }
}

export namespace WsChat_FromClient {
  export import sendMessage = WsSendMessage;

  export type eventName = 'sendMessage';

  export type messageTemplate = sendMessage.eventMessageTemplate;

  export interface template extends WsEvents.FromClient.template {
    eventName: eventName;
    message: messageTemplate;
  }
}

export namespace WsChat {
  export import FromServer = WsChat_FromServer;
  export import FromClient = WsChat_FromClient;

  export type eventName = WsChat_FromServer.eventName | WsChat_FromClient.eventName;

  export type messageTemplate =
    | WsChat_FromServer.messageTemplate
    | WsChat_FromClient.messageTemplate;

  export interface template extends WsEvents.template {
    eventName: eventName;
    message: messageTemplate;
  }
}

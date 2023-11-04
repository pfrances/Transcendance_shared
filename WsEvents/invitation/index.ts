import {WsEvents_FromServer} from '..';
import {WsInvitationAccepted} from './invitationAccepted';
import {WsInvitationCanceled} from './invitationCanceled';
import {WsInvitationDeclined} from './invitationDeclined';
import {WsNewInvitation} from './newInvitation';

export {WsNewInvitation, WsInvitationAccepted, WsInvitationCanceled, WsInvitationDeclined};

export namespace WsInvitation_FromServer {
  export import NewInvitation = WsNewInvitation;
  export import InvitationAccepted = WsInvitationAccepted;
  export import InvitationCanceled = WsInvitationCanceled;
  export import InvitationDeclined = WsInvitationDeclined;

  export type eventName =
    | 'newInvitation'
    | 'invitationAccepted'
    | 'invitationCanceled'
    | 'invitationDeclined';

  export type messageTemplate =
    | NewInvitation.eventMessageTemplate
    | InvitationAccepted.eventMessageTemplate
    | InvitationCanceled.eventMessageTemplate
    | InvitationDeclined.eventMessageTemplate;

  export interface template extends WsEvents_FromServer.template {
    eventName: eventName;
    message: messageTemplate;
  }
}

export namespace WsInvitation {
  export import FromServer = WsInvitation_FromServer;

  export type eventName = FromServer.eventName;

  export type messageTemplate = FromServer.messageTemplate;

  export interface template {
    eventName: eventName;
    message: messageTemplate;
  }
}

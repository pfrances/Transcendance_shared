import {WsEvents_FromServer} from '..';
import {WsInvitationUpdated} from './invitationUpdated';
import {WsInvitationAccepted} from './invitationUpdated/invitationAccepted';
import {WsInvitationCanceled} from './invitationUpdated/invitationCanceled';
import {WsInvitationDeclined} from './invitationUpdated/invitationDeclined';
import {WsNewInvitation} from './newInvitation';

export {
  WsNewInvitation,
  WsInvitationUpdated,
  WsInvitationAccepted,
  WsInvitationCanceled,
  WsInvitationDeclined,
};

export namespace WsInvitation_FromServer {
  export import NewInvitation = WsNewInvitation;
  export import InvitationUpdated = WsInvitationUpdated;
  export import InvitationAccepted = WsInvitationAccepted;
  export import InvitationCanceled = WsInvitationCanceled;
  export import InvitationDeclined = WsInvitationDeclined;

  export type eventName = 'newInvitation' | InvitationUpdated.eventName;

  export type messageTemplate =
    | NewInvitation.eventMessageTemplate
    | InvitationUpdated.messageTemplate;

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

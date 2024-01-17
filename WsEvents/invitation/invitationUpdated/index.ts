import {InvitationStatus} from '../../../HttpEndpoints/types';
import {WsEvents_FromServer} from '../..';
import {WsInvitationAccepted} from './invitationAccepted';
import {WsInvitationCanceled} from './invitationCanceled';
import {WsInvitationDeclined} from './invitationDeclined';

export {WsInvitationAccepted, WsInvitationCanceled, WsInvitationDeclined};

export namespace WsInvitationUpdated {
  export import InvitationAccepted = WsInvitationAccepted;
  export import InvitationCanceled = WsInvitationCanceled;
  export import InvitationDeclined = WsInvitationDeclined;

  export type eventName = 'invitationAccepted' | 'invitationCanceled' | 'invitationDeclined';

  export type messageTemplate =
    | InvitationAccepted.eventMessageTemplate
    | InvitationCanceled.eventMessageTemplate
    | InvitationDeclined.eventMessageTemplate;

  export interface template extends WsEvents_FromServer.template {
    eventName: eventName;
    message: messageTemplate;
  }

  const statusClassMap: Record<
    Exclude<InvitationStatus, 'PENDING'>,
    new (message: messageTemplate) => template
  > = {
    ACCEPTED: InvitationAccepted.Dto as new (message: messageTemplate) => template,
    CANCELED: InvitationCanceled.Dto as new (message: messageTemplate) => template,
    REFUSED: InvitationDeclined.Dto as new (message: messageTemplate) => template,
  };

  export const createInvitationUpdated = (message: messageTemplate): template => {
    const StatusClass = statusClassMap[message.status as Exclude<InvitationStatus, 'PENDING'>];
    if (StatusClass) {
      return new StatusClass(message);
    } else {
      throw new Error(`Invalid status: ${message.status}`);
    }
  };
}

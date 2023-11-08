import {InvitationStatus} from 'src/shared/HttpEndpoints/types';
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
    ACCEPTED: InvitationAccepted.Dto,
    CANCELED: InvitationCanceled.Dto,
    REFUSED: InvitationDeclined.Dto,
  };

  export const createInvitationUpdated = (message: messageTemplate): template => {
    const StatusClass = statusClassMap[message.status];
    if (StatusClass) {
      return new StatusClass(message);
    } else {
      throw new Error(`Invalid status: ${message.status}`);
    }
  };
}

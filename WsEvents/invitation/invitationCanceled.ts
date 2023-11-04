import {InvitationKind, InvitationStatus} from 'src/shared/HttpEndpoints/types';
import {WsInvitation_FromServer} from '.';

export namespace WsInvitationCanceled {
  export const eventName: WsInvitation_FromServer.eventName = 'invitationCanceled';

  export interface eventMessageTemplate {
    invitationId: number;
    senderId: number;
    status: InvitationStatus;
    kind: InvitationKind;
  }

  export class Dto implements WsInvitation_FromServer.template {
    public message: eventMessageTemplate;
    public eventName = eventName;

    constructor(message: eventMessageTemplate) {
      this.message = message;
    }
  }
}

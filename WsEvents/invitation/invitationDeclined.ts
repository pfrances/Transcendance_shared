import {InvitationKind, InvitationStatus} from 'src/shared/HttpEndpoints/types';
import {WsInvitation_FromServer} from '.';

export namespace WsInvitationDeclined {
  export const eventName: WsInvitation_FromServer.eventName = 'invitationDeclined';

  export interface eventMessageTemplate {
    invitationId: number;
    receiverId: number;
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

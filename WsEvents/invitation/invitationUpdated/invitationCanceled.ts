import {InvitationKind, InvitationStatus} from 'src/shared/HttpEndpoints/types';
import {WsInvitationUpdated} from '.';

export namespace WsInvitationCanceled {
  export const eventName: WsInvitationUpdated.eventName = 'invitationCanceled';

  export class eventMessageTemplate {
    invitationId: number;
    senderId: number;
    status: InvitationStatus = 'CANCELED';
    kind: InvitationKind;
  }

  export class Dto implements WsInvitationUpdated.template {
    public message: eventMessageTemplate;
    public eventName = eventName;

    constructor({status, invitationId, senderId, kind}: eventMessageTemplate) {
      this.message = {status, invitationId, senderId, kind};
    }
  }
}

import {InvitationKind, InvitationStatus} from 'src/shared/HttpEndpoints/types';
import {WsInvitationUpdated} from '.';

export namespace WsInvitationDeclined {
  export const eventName: WsInvitationUpdated.eventName = 'invitationDeclined';

  export class eventMessageTemplate {
    invitationId: number;
    receiverId: number;
    status: InvitationStatus = 'REFUSED';
    kind: InvitationKind;

    constructor({invitationId, receiverId, kind}: eventMessageTemplate) {
      this.invitationId = invitationId;
      this.receiverId = receiverId;
      this.kind = kind;
    }
  }

  export class Dto implements WsInvitationUpdated.template {
    public message: eventMessageTemplate;
    public eventName = eventName;

    constructor({status, invitationId, receiverId, kind}: eventMessageTemplate) {
      this.message = {status, invitationId, receiverId, kind};
    }
  }
}

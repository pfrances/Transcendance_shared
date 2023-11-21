import {InvitationKind, InvitationStatus} from 'src/shared/HttpEndpoints/types';
import {WsInvitationUpdated} from '.';

export namespace WsInvitationAccepted {
  export const eventName: WsInvitationUpdated.eventName = 'invitationAccepted';

  export class eventMessageTemplate {
    public status: InvitationStatus = 'ACCEPTED';
    public invitationId: number;
    public receiverId: number;
    public kind: InvitationKind;

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

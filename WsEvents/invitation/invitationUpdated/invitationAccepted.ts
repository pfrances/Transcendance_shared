import {InvitationKind, InvitationStatus} from '../../../HttpEndpoints/types';
import {WsInvitationUpdated} from '.';

export namespace WsInvitationAccepted {
  export const eventName: WsInvitationUpdated.eventName = 'invitationAccepted';

  export class eventMessageTemplate {
    public readonly status: InvitationStatus = 'ACCEPTED';
    public readonly invitationId: number;
    public readonly receiverId: number;
    public readonly kind: InvitationKind;

    constructor({invitationId, receiverId, kind}: eventMessageTemplate) {
      this.invitationId = invitationId;
      this.receiverId = receiverId;
      this.kind = kind;
    }
  }

  export class Dto implements WsInvitationUpdated.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor({status, invitationId, receiverId, kind}: eventMessageTemplate) {
      this.message = new eventMessageTemplate({status, invitationId, receiverId, kind});
    }
  }
}

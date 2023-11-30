import {InvitationKind, InvitationStatus} from '../../../HttpEndpoints/types';
import {WsInvitationUpdated} from '.';

export namespace WsInvitationCanceled {
  export const eventName: WsInvitationUpdated.eventName = 'invitationCanceled';

  export class eventMessageTemplate {
    public readonly invitationId: number;
    public readonly senderId: number;
    public readonly status: InvitationStatus = 'CANCELED';
    public readonly kind: InvitationKind;

    constructor({invitationId, senderId, kind}: eventMessageTemplate) {
      this.invitationId = invitationId;
      this.senderId = senderId;
      this.kind = kind;
    }
  }

  export class Dto implements WsInvitationUpdated.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor({status, invitationId, senderId, kind}: eventMessageTemplate) {
      this.message = new eventMessageTemplate({status, invitationId, senderId, kind});
    }
  }
}

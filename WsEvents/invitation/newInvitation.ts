import {InvitationKind, InvitationStatus} from '../../HttpEndpoints/types';
import {WsInvitation_FromServer} from '.';

export namespace WsNewInvitation {
  export const eventName: WsInvitation_FromServer.eventName = 'newInvitation';

  export interface eventMessageTemplate {
    invitationId: number;
    senderId: number;
    status: InvitationStatus;
    kind: InvitationKind;
  }

  export class Dto implements WsInvitation_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor({status, invitationId, senderId, kind}: eventMessageTemplate) {
      this.message = {status, invitationId, senderId, kind};
    }
  }
}

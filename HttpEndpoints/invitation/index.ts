export const HttpInvitationEndPointBase = '/invitation';

import {HttpSendInvitation} from './sendInvitation';
import {HttpUpdateInvitation} from './updateInvitation';

export {HttpSendInvitation, HttpUpdateInvitation};

export namespace HttpInvitation {
  export import sendInvitation = HttpSendInvitation;
  export import updateInvitation = HttpUpdateInvitation;

  export const endPointBase = HttpInvitationEndPointBase;

  export type reqTemplate = sendInvitation.reqTemplate | updateInvitation.reqTemplate;

  export type resTemplate = sendInvitation.resTemplate | updateInvitation.resTemplate;

  export type requestSender = sendInvitation.requestSender | updateInvitation.requestSender;
}

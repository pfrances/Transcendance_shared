import {HttpSendInvitation} from './sendInvitation';
import {HttpUpdateInvitation} from './updateInvitation';

export {HttpSendInvitation, HttpUpdateInvitation};

export namespace HttpInvitation {
  export import sendInvitation = HttpSendInvitation;
  export import updateInvitation = HttpUpdateInvitation;

  export const endPointBase = '/invitation';

  export type reqTemplate = sendInvitation.reqTemplate | updateInvitation.reqTemplate;

  export type resTemplate = sendInvitation.resTemplate | updateInvitation.resTemplate;
}

export const HttpInvitationEndPointBase = HttpInvitation.endPointBase;

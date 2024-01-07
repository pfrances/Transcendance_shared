import {HttpEndPointBase} from '../enum';

import {HttpUpdateInvitation} from './updateInvitation';
import {HttpSendInvitation} from './sendInvitation';
import {HttpGetInvitations} from './getInvitations';

export {HttpSendInvitation, HttpUpdateInvitation, HttpGetInvitations};

export namespace HttpInvitation {
  export import sendInvitation = HttpSendInvitation;
  export import updateInvitation = HttpUpdateInvitation;
  export import getInvitations = HttpGetInvitations;

  export const endPointBase = HttpEndPointBase.INVITATION;

  export type reqTemplate =
    | sendInvitation.reqTemplate
    | updateInvitation.reqTemplate
    | getInvitations.reqTemplate;

  export type resTemplate =
    | sendInvitation.resTemplate
    | updateInvitation.resTemplate
    | getInvitations.resTemplate;

  export type requestSender =
    | sendInvitation.requestSender
    | updateInvitation.requestSender
    | getInvitations.requestSender;
}

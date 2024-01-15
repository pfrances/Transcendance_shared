import {HttpEndPointBase} from '../enum';

import {HttpUpdateInvitation} from './updateInvitation';
import {HttpSendInvitation} from './sendInvitation';
import {HttpGetInvitations} from './getInvitations';
import {HttpGetInvitationFromTo} from './getInvitationsFromTo';

export {HttpSendInvitation, HttpUpdateInvitation, HttpGetInvitations, HttpGetInvitationFromTo};

export namespace HttpInvitation {
  export import sendInvitation = HttpSendInvitation;
  export import updateInvitation = HttpUpdateInvitation;
  export import getInvitations = HttpGetInvitations;
  export import getInvitationsFromTo = HttpGetInvitationFromTo;

  export const endPointBase = HttpEndPointBase.INVITATION;

  export type reqTemplate =
    | sendInvitation.reqTemplate
    | updateInvitation.reqTemplate
    | getInvitations.reqTemplate
    | getInvitationsFromTo.reqTemplate;

  export type resTemplate =
    | sendInvitation.resTemplate
    | updateInvitation.resTemplate
    | getInvitations.resTemplate
    | getInvitationsFromTo.resTemplate;

  export type requestSender =
    | sendInvitation.requestSender
    | updateInvitation.requestSender
    | getInvitations.requestSender
    | getInvitationsFromTo.requestSender;
}

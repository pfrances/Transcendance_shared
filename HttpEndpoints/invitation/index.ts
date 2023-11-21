import { HttpEndPointBase } from '../enum';

import {HttpUpdateInvitation} from './updateInvitation';
import {HttpSendInvitation} from './sendInvitation';

export {HttpSendInvitation, HttpUpdateInvitation};

export namespace HttpInvitation {
  export import sendInvitation = HttpSendInvitation;
  export import updateInvitation = HttpUpdateInvitation;

  export const endPointBase = HttpEndPointBase.INVITATION;

  export type reqTemplate = sendInvitation.reqTemplate | updateInvitation.reqTemplate;

  export type resTemplate = sendInvitation.resTemplate | updateInvitation.resTemplate;

  export type requestSender = sendInvitation.requestSender | updateInvitation.requestSender;
}

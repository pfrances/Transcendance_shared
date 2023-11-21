import { HttpEndPointBase } from '../enum';

import {HttpGetMe} from './me';
import {HttpEditMe} from './edit';
import {HttpAllUsers} from './allUsers';

export {HttpGetMe, HttpEditMe, HttpAllUsers};

export namespace HttpUser {
  export import getMe = HttpGetMe;
  export import editMe = HttpEditMe;
  export import allUsers = HttpAllUsers;

  export const endPointBase = HttpEndPointBase.USER;

  export type reqTemplate = getMe.reqTemplate | editMe.reqTemplate | allUsers.reqTemplate;

  export type resTemplate = getMe.resTemplate | editMe.resTemplate | allUsers.resTemplate;

  export type requestSender = getMe.requestSender | editMe.requestSender | allUsers.requestSender;
}

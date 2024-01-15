import {HttpEndPointBase} from '../enum';

import {HttpGetMe} from './me';
import {HttpGetUser} from './getUser';
import {HttpEditMe} from './edit';
import {HttpAllUsers} from './allUsers';
import {HttpBlockUser} from './blockUser';
import {HttpUnblockUser} from './unblockUser';

export {HttpGetMe, HttpGetUser, HttpEditMe, HttpAllUsers, HttpBlockUser, HttpUnblockUser};

export namespace HttpUser {
  export import getMe = HttpGetMe;
  export import getUser = HttpGetUser;
  export import editMe = HttpEditMe;
  export import allUsers = HttpAllUsers;
  export import blockUser = HttpBlockUser;
  export import unblockUser = HttpUnblockUser;

  export const endPointBase = HttpEndPointBase.USER;

  export type reqTemplate =
    | getMe.reqTemplate
    | getUser.reqTemplate
    | editMe.reqTemplate
    | allUsers.reqTemplate
    | blockUser.reqTemplate
    | unblockUser.reqTemplate;

  export type resTemplate =
    | getMe.resTemplate
    | getUser.resTemplate
    | editMe.resTemplate
    | allUsers.resTemplate
    | blockUser.resTemplate
    | unblockUser.resTemplate;

  export type requestSender =
    | getMe.requestSender
    | getUser.requestSender
    | editMe.requestSender
    | allUsers.requestSender
    | blockUser.requestSender
    | unblockUser.requestSender;
}

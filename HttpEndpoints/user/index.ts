export const HttpUserEndPointBase = '/user';

import {HttpGetMe} from './me';
import {HttpEditMe} from './edit';

export {HttpGetMe, HttpEditMe};

export namespace HttpUser {
  export import getMe = HttpGetMe;
  export import editMe = HttpEditMe;

  export const endPointBase = HttpUserEndPointBase;

  export type reqTemplate = getMe.reqTemplate | editMe.reqTemplate;

  export type resTemplate = getMe.resTemplate | editMe.resTemplate;

  export type requestSender = getMe.requestSender | editMe.requestSender;
}

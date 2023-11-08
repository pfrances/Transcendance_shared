import {HttpGetMe} from './me';
import {HttpEditMe} from './edit';

export {HttpGetMe, HttpEditMe};

export namespace HttpUser {
  export import getMe = HttpGetMe;
  export import editMe = HttpEditMe;

  export const endPointBase = '/user';

  export type reqTemplate = editMe.reqTemplate;

  export type resTemplate = getMe.resTemplate | editMe.resTemplate;
}

export const HttpUserEndPointBase = HttpUser.endPointBase;

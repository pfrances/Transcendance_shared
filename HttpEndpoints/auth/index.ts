export const HttpAuthEndPointBase = '/auth';

import {HttpAuth42} from './42';
import {HttpSignUp} from './SignUp';
import {HttpSignIn} from './SignIn';

export {HttpAuth42, HttpSignUp, HttpSignIn};
export namespace HttpAuth {
  export import Auth42 = HttpAuth42;
  export import SignUp = HttpSignUp;
  export import SignIn = HttpSignIn;

  export const endPointBase = HttpAuthEndPointBase;

  export type reqTemplate = Auth42.reqTemplate | SignUp.reqTemplate | SignIn.reqTemplate;

  export type resTemplate = Auth42.resTemplate | SignUp.resTemplate | SignIn.resTemplate;

  export type requestSender = SignUp.requestSender | SignIn.requestSender;
}

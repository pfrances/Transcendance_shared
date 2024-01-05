import {HttpEndPointBase} from '../enum';

import {HttpAuth42} from './42';
import {HttpSignUp} from './SignUp';
import {HttpSignIn} from './SignIn';
import {Http2FA} from './Auth2FA';
import {HttpResend2FA} from './Resend2FA';
import {HttpRefresh} from './Refresh';

export {HttpAuth42, HttpSignUp, HttpSignIn, Http2FA, HttpResend2FA, HttpRefresh};
export namespace HttpAuth {
  export import Auth42 = HttpAuth42;
  export import SignUp = HttpSignUp;
  export import SignIn = HttpSignIn;
  export import Auth2FA = Http2FA;
  export import Resend2FA = HttpResend2FA;
  export import Refresh = HttpRefresh;

  export const endPointBase = HttpEndPointBase.AUTH;

  export type reqTemplate =
    | Auth42.reqTemplate
    | SignUp.reqTemplate
    | SignIn.reqTemplate
    | Auth2FA.reqTemplate
    | Resend2FA.reqTemplate
    | Refresh.reqTemplate;

  export type resTemplate =
    | Auth42.resTemplate
    | SignUp.resTemplate
    | SignIn.resTemplate
    | Auth2FA.resTemplate
    | Resend2FA.resTemplate
    | Refresh.resTemplate;

  export type requestSender =
    | SignUp.requestSender
    | SignIn.requestSender
    | Auth2FA.requestSender
    | Resend2FA.requestSender
    | Refresh.requestSender;
}

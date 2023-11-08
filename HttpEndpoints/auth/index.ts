import {HttpAuth42} from './42';
import {HttpSignUp} from './SignUp';
import {HttpSignIn} from './SignIn';

export {HttpAuth42, HttpSignUp, HttpSignIn};
export namespace HttpAuth {
  export import Auth42 = HttpAuth42;
  export import SignUp = HttpSignUp;
  export import SignIn = HttpSignIn;

  export const endPointBase = '/auth';

  export type reqTemplate = SignUp.reqTemplate | SignIn.reqTemplate;

  export type resTemplate = Auth42.resTemplate | SignUp.resTemplate | SignIn.resTemplate;
}

export const HttpAuthEndPointBase = HttpAuth.endPointBase;

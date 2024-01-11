import {UserPublicProfile} from '../../HttpEndpoints/interfaces';
import {WsUser_FromServer} from '.';

export namespace WsUserProfilUpdate {
  export const eventName: WsUser_FromServer.eventName = 'userProfileUpdate';

  export interface eventMessageTemplate {
    user: UserPublicProfile;
  }

  export class Dto implements WsUser_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(msg: eventMessageTemplate) {
      this.message = msg;
    }
  }
}

import {UserPublicProfile} from '../../HttpEndpoints/interfaces';
import {WsUser_FromServer} from '.';

export namespace WsUserBlocking {
  export const eventName: WsUser_FromServer.eventName = 'userBlocking';

  export interface eventMessageTemplate {
    user: UserPublicProfile;
    type: 'block' | 'unblock';
  }

  export class Dto implements WsUser_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(msg: eventMessageTemplate) {
      this.message = msg;
    }
  }
}

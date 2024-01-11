import {UserPublicProfile} from '../../HttpEndpoints/interfaces';
import {WsUser_FromServer} from '.';

export namespace WsUserConnection {
  export const eventName: WsUser_FromServer.eventName = 'userConnection';

  export interface eventMessageTemplate {
    user: UserPublicProfile;
    type: 'connection' | 'disconnection';
  }

  export class Dto implements WsUser_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(msg: eventMessageTemplate) {
      this.message = msg;
    }
  }
}

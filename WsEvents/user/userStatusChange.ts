import {UserStatusType} from '../../HttpEndpoints/interfaces';
import {WsUser_FromServer} from '.';

export namespace WsUserStatusChange {
  export const eventName: WsUser_FromServer.eventName = 'userStatusChange';

  export interface eventMessageTemplate {
    userId: number;
    status: UserStatusType;
  }

  export class Dto implements WsUser_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(msg: eventMessageTemplate) {
      this.message = msg;
    }
  }
}

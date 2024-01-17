import {UserStatusType} from '../../HttpEndpoints/interfaces';
import {WsUser_FromClient} from '.';

export namespace WsSetUserStatus {
  export const eventName: WsUser_FromClient.eventName = 'setUserStatus';

  export interface eventMessageTemplate {
    status: UserStatusType;
  }

  export class Dto implements WsUser_FromClient.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(message: eventMessageTemplate) {
      this.message = message;
    }
  }
}

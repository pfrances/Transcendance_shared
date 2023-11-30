import {WsFriend_FromServer} from '.';

export namespace WsFriendDisconnection {
  export const eventName: WsFriend_FromServer.eventName = 'friendDisconnection';

  export interface eventMessageTemplate {
    friendId: number;
  }

  export class Dto implements WsFriend_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor({friendId}: eventMessageTemplate) {
      this.message = {friendId};
    }
  }
}

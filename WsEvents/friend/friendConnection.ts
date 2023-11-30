import {WsFriend_FromServer} from '.';

export namespace WsFriendConnection {
  export const eventName: WsFriend_FromServer.eventName = 'friendConnection';

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

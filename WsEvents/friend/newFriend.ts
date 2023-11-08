import {WsFriend_FromServer} from '.';

export namespace WsNewFriend {
  export const eventName: WsFriend_FromServer.eventName = 'newFriend';

  export interface eventMessageTemplate {
    friendId: number;
  }

  export class Dto implements WsFriend_FromServer.template {
    public message: eventMessageTemplate;
    public eventName = eventName;

    constructor({friendId}: eventMessageTemplate) {
      this.message = {friendId};
    }
  }
}

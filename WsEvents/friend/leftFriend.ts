import {WsFriend_FromServer} from '.';

export namespace WsLeftFriend {
  export const eventName: WsFriend_FromServer.eventName = 'leftFriend';

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

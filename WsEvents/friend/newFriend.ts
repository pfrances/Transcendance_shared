import {WsFriend_FromServer} from '.';

export namespace WsNewFriend {
  export const eventName: WsFriend_FromServer.eventName = 'newFriend';

  export interface eventMessageTemplate {
    friend: {
      userId: number;
      nickname: string;
      avatarUrl: string | null;
    };
  }

  export class Dto implements WsFriend_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(msg: eventMessageTemplate) {
      this.message = msg;
    }
  }
}

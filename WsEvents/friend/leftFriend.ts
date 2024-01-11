import {WsFriend_FromServer} from '.';

export namespace WsLeftFriend {
  export const eventName: WsFriend_FromServer.eventName = 'leftFriend';

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

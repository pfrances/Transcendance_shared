import {WsChat_FromServer} from '.';

export type WsUpdateChatParticipationAction =
  | ({
      changeRole: boolean;
    } & ({mute: boolean} | {unmute: boolean}))
  | {kick: boolean}
  | {ban: boolean};

export namespace WsChatParticipationUpdate {
  export const eventName: WsChat_FromServer.eventName = 'chatParticipationUpdate';

  export interface eventMessageTemplate {
    chat: {
      chatId: number;
      chatName: string;
    };
    updater: {
      userId: number;
      nickname: string;
      avatarUrl: string | null;
    };
    updatedUser: {
      userId: number;
      nickname: string;
      avatarUrl: string | null;
    };
    action: WsUpdateChatParticipationAction;
  }

  export class Dto implements WsChat_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(msg: eventMessageTemplate) {
      this.message = msg;
    }
  }
}

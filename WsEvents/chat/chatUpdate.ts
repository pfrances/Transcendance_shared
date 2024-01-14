import {WsChat_FromServer} from '.';

export type WsUpdateChatAction =
  | ({
      updateName: boolean;
      updateAvatar: boolean;
    } & ({updatePassword: boolean} | {removePassword: boolean}) & {updatePrivacy: boolean})
  | {newChat: boolean};

export namespace WsChatUpdate {
  export const eventName: WsChat_FromServer.eventName = 'chatUpdate';

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
    action: WsUpdateChatAction;
  }

  export class Dto implements WsChat_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(msg: eventMessageTemplate) {
      this.message = msg;
    }
  }
}

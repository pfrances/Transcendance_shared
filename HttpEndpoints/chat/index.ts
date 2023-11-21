export const HttpChatEndPointBase = '/chat';

import {HttpCreateChat} from './createChat';
import {HttpGetAllMessage} from './getAllMessage';
import {HttpGetChatInfo} from './getChatInfo';
import {HttpJoinChat} from './joinChat';
import {HttpLeaveChat} from './leaveChat';
import {HttpUpdateChat} from './updateChat';

export {
  HttpCreateChat,
  HttpGetAllMessage,
  HttpGetChatInfo,
  HttpJoinChat,
  HttpLeaveChat,
  HttpUpdateChat,
};

export namespace HttpChat {
  export import create = HttpCreateChat;
  export import getMessages = HttpGetAllMessage;
  export import getInfo = HttpGetChatInfo;
  export import join = HttpJoinChat;
  export import leave = HttpLeaveChat;
  export import update = HttpUpdateChat;

  export const endPointBase = HttpChatEndPointBase;

  export type reqTemplate =
    | create.reqTemplate
    | getMessages.reqTemplate
    | getInfo.reqTemplate
    | join.reqTemplate
    | leave.reqTemplate
    | update.reqTemplate;

  export type resTemplate =
    | create.resTemplate
    | getMessages.resTemplate
    | getInfo.resTemplate
    | join.resTemplate
    | leave.resTemplate
    | update.resTemplate;

  export type requestSender =
    | create.requestSender
    | getMessages.requestSender
    | getInfo.requestSender
    | join.requestSender
    | leave.requestSender
    | update.requestSender;
}

import {HttpEndPointBase} from '../enum';
import {HttpCreateChat} from './createChat';
import {HttpGetAllChats} from './getAllChats';
import {HttpGetAllMessage} from './getAllMessage';
import {HttpGetChatInfo} from './getChatInfo';
import {HttpJoinChat} from './joinChat';
import {HttpLeaveChat} from './leaveChat';
import {HttpUpdateChat} from './updateChat';

export {
  HttpGetAllChats,
  HttpCreateChat,
  HttpGetAllMessage,
  HttpGetChatInfo,
  HttpJoinChat,
  HttpLeaveChat,
  HttpUpdateChat,
};

export namespace HttpChat {
  export import getAll = HttpGetAllChats;
  export import create = HttpCreateChat;
  export import getMessages = HttpGetAllMessage;
  export import getInfo = HttpGetChatInfo;
  export import join = HttpJoinChat;
  export import leave = HttpLeaveChat;
  export import update = HttpUpdateChat;

  export const endPointBase = HttpEndPointBase.CHAT;

  export type reqTemplate =
    | getAll.reqTemplate
    | create.reqTemplate
    | getMessages.reqTemplate
    | getInfo.reqTemplate
    | join.reqTemplate
    | leave.reqTemplate
    | update.reqTemplate;

  export type resTemplate =
    | getAll.resTemplate
    | create.resTemplate
    | getMessages.resTemplate
    | getInfo.resTemplate
    | join.resTemplate
    | leave.resTemplate
    | update.resTemplate;

  export type requestSender =
    | getAll.requestSender
    | create.requestSender
    | getMessages.requestSender
    | getInfo.requestSender
    | join.requestSender
    | leave.requestSender
    | update.requestSender;
}

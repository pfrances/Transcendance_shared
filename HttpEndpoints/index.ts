import {HttpAuth} from './auth';
import {HttpUser} from './user';
import {HttpChat} from './chat';
import {HttpFriend} from './friend';
import {HttpInvitation} from './invitation';
import {HttpGame} from './game';

export {HttpAuth, HttpUser, HttpChat, HttpFriend, HttpInvitation, HttpGame};

export namespace Http {
  export import Auth = HttpAuth;
  export import User = HttpUser;
  export import Chat = HttpChat;
  export import Game = HttpGame;
  export import Friend = HttpFriend;
  export import Invitation = HttpInvitation;

  export type reqTemplate =
    | Auth.reqTemplate
    | User.reqTemplate
    | Chat.reqTemplate
    | Friend.reqTemplate
    | Invitation.reqTemplate
    | Game.reqTemplate;

  export type resTemplate =
    | Auth.resTemplate
    | User.resTemplate
    | Chat.resTemplate
    | Friend.resTemplate
    | Invitation.resTemplate
    | Game.resTemplate;

  export type requestSender =
    | Auth.requestSender
    | User.requestSender
    | Chat.requestSender
    | Friend.requestSender
    | Invitation.requestSender
    | Game.requestSender;
}

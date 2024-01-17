import {HttpEndPointBase} from '../enum';
import {HttpGameJoinWaitList} from './joinGameWaitList';
import {HttpLeaveGame} from './leaveGame';
import {HttpGameUpdateInCreation} from './updateGameInCreation';
import {HttpGameAcceptInCreation} from './acceptGameInCreation';
import {HttpGetGameInCreation} from './getGameInCreation';
import {HttpGetMatchMakingInfo} from './getMatchMakingInfo';

export {
  HttpGameJoinWaitList,
  HttpLeaveGame,
  HttpGameUpdateInCreation,
  HttpGameAcceptInCreation,
  HttpGetGameInCreation,
  HttpGetMatchMakingInfo,
};

export namespace HttpGame {
  export import joinWaitList = HttpGameJoinWaitList;
  export import leaveGame = HttpLeaveGame;
  export import updateInCreation = HttpGameUpdateInCreation;
  export import acceptInCreation = HttpGameAcceptInCreation;
  export import getInCreation = HttpGetGameInCreation;
  export import getMatchMakingInfo = HttpGetMatchMakingInfo;

  export const endPointBase = HttpEndPointBase.GAME;

  export type reqTemplate =
    | joinWaitList.reqTemplate
    | leaveGame.reqTemplate
    | updateInCreation.reqTemplate
    | acceptInCreation.reqTemplate
    | getInCreation.reqTemplate
    | getMatchMakingInfo.reqTemplate;

  export type resTemplate =
    | joinWaitList.resTemplate
    | leaveGame.resTemplate
    | updateInCreation.resTemplate
    | acceptInCreation.resTemplate
    | getInCreation.resTemplate
    | getMatchMakingInfo.resTemplate;

  export type requestSender =
    | joinWaitList.requestSender
    | leaveGame.requestSender
    | updateInCreation.requestSender
    | acceptInCreation.requestSender
    | getInCreation.requestSender
    | getMatchMakingInfo.requestSender;
}

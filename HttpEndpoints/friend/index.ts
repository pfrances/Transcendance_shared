import { HttpEndPointBase } from '../enum';

import {HttpRemoveFriend} from './RemoveFriend';
import {HttpGetFriendsList} from './GetFriend';

export {HttpGetFriendsList, HttpRemoveFriend};

export namespace HttpFriend {
  export import getFriendLists = HttpGetFriendsList;
  export import removeFriend = HttpRemoveFriend;

  export const endPointBase = HttpEndPointBase.FRIEND;

  export type reqTemplate = getFriendLists.reqTemplate | removeFriend.reqTemplate;

  export type resTemplate = getFriendLists.resTemplate | removeFriend.resTemplate;

  export type requestSender = getFriendLists.requestSender | removeFriend.requestSender;
}

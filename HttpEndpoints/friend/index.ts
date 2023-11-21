export const HttpFriendEndPointBase = 'friend';

import {HttpGetFriendsList} from './GetFriend';
import {HttpRemoveFriend} from './RemoveFriend';

export {HttpGetFriendsList, HttpRemoveFriend};

export namespace HttpFriend {
  export import getFriendLists = HttpGetFriendsList;
  export import removeFriend = HttpRemoveFriend;

  export const endPointBase = HttpFriendEndPointBase;

  export type reqTemplate = getFriendLists.reqTemplate | removeFriend.reqTemplate;

  export type resTemplate = getFriendLists.resTemplate | removeFriend.resTemplate;

  export type requestSender = getFriendLists.requestSender | removeFriend.requestSender;
}

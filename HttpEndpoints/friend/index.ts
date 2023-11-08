import {HttpGetFriendsList} from './GetFriend';
import {HttpRemoveFriend} from './RemoveFriend';

export {HttpGetFriendsList, HttpRemoveFriend};

export namespace HttpFriend {
  export import getFriendLists = HttpGetFriendsList;
  export import removeFriend = HttpRemoveFriend;

  export const endPointBase = '/friend';

  export type reqTemplate = removeFriend.reqTemplate;

  export type resTemplate = getFriendLists.resTemplate | removeFriend.resTemplate;
}

export const HttpFriendEndPointBase = HttpFriend.endPointBase;

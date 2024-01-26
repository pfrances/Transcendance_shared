import {HttpEndPointBase, HttpMethod} from '../enum';
import {GameRules, GameStatus, UserPublicProfile} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGetGame {
  export const method = HttpMethod.GET;
  export const endPoint = '/:gameId';
  export const getEndpoint = (gameId: number) => `/${gameId}`;
  export const getEndPointFull = (gameId: number) =>
    `${HttpEndPointBase.GAME}${getEndpoint(gameId)}`;

  export class reqTemplate {}

  export class resTemplate {
    public readonly gameId: number;
    public readonly player1: {
      profile: UserPublicProfile;
      score: number;
    };
    public readonly player2: {
      profile: UserPublicProfile;
      score: number;
    };
    public readonly rules: GameRules;
    public readonly status: GameStatus;
    public readonly startedAt: Date;
    public readonly endedAt?: Date;
    public readonly winnerId?: number;

    constructor({
      gameId,
      player1,
      player2,
      rules,
      winnerId,
      status,
      startedAt,
      endedAt,
    }: resTemplate) {
      this.gameId = gameId;
      this.player1 = player1;
      this.player2 = player2;
      this.rules = rules;
      this.winnerId = winnerId;
      this.status = status;
      this.startedAt = startedAt;
      this.endedAt = endedAt;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(gameId: number) {
      super(getEndPointFull(gameId), method, reqTemplate, resTemplate);
    }
  }
}

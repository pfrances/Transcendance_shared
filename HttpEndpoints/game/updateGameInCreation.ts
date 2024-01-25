import {HttpEndPointBase, HttpMethod} from '../enum';
import {BallSize, BallSpeed, PaddleSize, PaddleSpeed} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpGameUpdateInCreation {
  export const method = HttpMethod.PATCH;
  export const endPoint = '/creation/update/:gameInCreationId';
  export const getEndpoint = (gameInCreationId: number) => `/creation/update/${gameInCreationId}`;
  export const getEndPointFull = (gameInCreationId: number) =>
    `${HttpEndPointBase.GAME}${getEndpoint(gameInCreationId)}`;

  export class reqTemplate {
    public readonly scoreToWin: number;
    public readonly ballSpeed: BallSpeed;
    public readonly ballSize: BallSize;
    public readonly paddleSpeed: PaddleSpeed;
    public readonly paddleSize: PaddleSize;

    constructor({scoreToWin, ballSpeed, ballSize, paddleSpeed, paddleSize}: reqTemplate) {
      this.scoreToWin = scoreToWin;
      this.ballSpeed = ballSpeed;
      this.ballSize = ballSize;
      this.paddleSpeed = paddleSpeed;
      this.paddleSize = paddleSize;
    }
  }

  export class resTemplate {}

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(gameInCreationId: number, req: reqTemplate) {
      super(getEndPointFull(gameInCreationId), method, req, resTemplate);
    }
  }
}

import { createAction, props } from '@ngrx/store';
import { GameStatus } from '../../models/game.model';

export const setAttemptsCount = createAction(
  '[Game] Set Attempts Count',
  props<{ count: number }>()
);

export const setGameStatus = createAction(
  '[Game] Set Game Status',
  props<{ status: GameStatus }>()
);

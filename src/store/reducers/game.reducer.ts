import { createReducer, on } from '@ngrx/store';
import { GameData } from '../../models/game.model';
import { setAttemptsCount, setGameStatus } from '../actions/game.action';

const initialState: GameData = {
  count: 0,
  status: 'started',
};

export const gameReducer = createReducer(
  initialState,
  on(setAttemptsCount, (state, action) => {
    return { ...state, count: action.count };
  }),
  on(setGameStatus, (state, action) => {
    return { ...state, status: action.status };
  })
);

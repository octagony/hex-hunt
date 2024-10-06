import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameData } from '../../models/game.model';
import { GAME_DATA_SELECTOR } from '../constants/store.constants';

export const selectAttemptsData =
  createFeatureSelector<GameData>(GAME_DATA_SELECTOR);

export const selectCurrentAttemptsCount = createSelector(
  selectAttemptsData,
  (state) => {
    return state.count;
  }
);

export const selectCurrentGameStatus = createSelector(
  selectAttemptsData,
  (state) => {
    return state.status;
  }
);

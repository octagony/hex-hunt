import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HexData } from '../../models/hex.model';
import { HEX_DATA_SELECTOR } from '../constants/store.constants';

export const selectHexData = createFeatureSelector<HexData>(HEX_DATA_SELECTOR);

export const selectHexString = createSelector(selectHexData, (state) => {
  return state.hexString;
});

export const selectHexArrayString = createSelector(selectHexData, (state) => {
  return state.hexString.split('#').at(1)?.split('') ?? [];
});

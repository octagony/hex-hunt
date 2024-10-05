import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HexData } from '../../models/hex.model';

export const selectHexData = createFeatureSelector<HexData>('hexData');

export const selectHexString = createSelector(selectHexData, (state) => {
  return state.hexString;
});

export const selectHexArrayString = createSelector(selectHexData, (state) => {
  return state.hexString.split('#').at(1)?.split('') ?? [];
});

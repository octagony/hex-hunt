import { createReducer, on } from '@ngrx/store';
import { HexData } from '../../models/hex.model';
import { setHexString } from '../actions/hex.action';

const initialState: HexData = {
  hexString: '',
};

export const hexReducer = createReducer(
  initialState,
  on(setHexString, (state, action) => {
    return { ...state, hexString: action.hexString };
  })
);

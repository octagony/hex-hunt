import { SET_HEX } from './hex.actions';

export const initialState: string = '';

export function hexReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_HEX:
      return action.hex;
    default:
      return state;
  }
}

import { createAction, props } from '@ngrx/store';

export const setHexString = createAction(
  '[Hex] Set Hex String',
  props<{ hexString: string }>()
);

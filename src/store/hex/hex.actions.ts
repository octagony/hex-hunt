export const SET_HEX = '[HEX] Set hex';

export class SetHexAction {
  readonly type = SET_HEX;
  constructor(public hex: string) {}
}

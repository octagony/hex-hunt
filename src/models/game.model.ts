export interface GameData {
  count: number;
  status: GameStatus;
}

export type GameStatus = 'started' | 'finished';

import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setGameStatus } from '../../store/actions/game.action';
import { selectHexArrayString } from '../../store/selectors/hex.selector';

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [NgIf],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.scss',
})
export class ComparisonComponent implements OnInit {
  @Input() userString?: string;

  userStringAnswers: Array<{ id: number; char: string; status: string }> = [];
  hexArray$?: Array<string>;

  constructor(private store: Store) {
    this.store.select(selectHexArrayString).subscribe((hexArray) => {
      this.hexArray$ = hexArray;
    });
  }

  ngOnInit(): void {
    const stringSplit = this.userString?.split('#').at(1)?.split('')!;
    this.userStringAnswers = stringSplit.map((char, index) => {
      switch (true) {
        case this.hexArray$![index] === char:
          return { id: index, char, status: 'right' };
        case this.hexArray$!.includes(char):
          return { id: index, char, status: 'semi-right' };
        default:
          return { id: index, char, status: 'wrong' };
      }
    });

    if (this.userStringAnswers.every((item) => item.status === 'right')) {
      this.store.dispatch(setGameStatus({ status: 'finished' }));
    }
  }
}

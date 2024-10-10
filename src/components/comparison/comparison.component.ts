import { NgIf } from '@angular/common';
import {
  Component,
  Input,
  NgZone,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
export class ComparisonComponent implements OnChanges {
  @Input() userString?: string;

  userStringAnswers: Array<{ id: number; char: string; status: string }> = [];
  hexArray$?: Array<string>;

  constructor(private store: Store, private ngZone: NgZone) {
    this.store.select(selectHexArrayString).subscribe((hexArray) => {
      this.hexArray$ = hexArray;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkComparison(changes['userString'].currentValue);
  }

  async checkComparison(userString: string) {
    const stringSplit = userString?.split('#').at(1)?.split('')! || [];
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

    if (
      this.userStringAnswers.length &&
      this.userStringAnswers.every((item) => item.status === 'right')
    ) {
      await Promise.resolve();
      this.store.dispatch(setGameStatus({ status: 'finished' }));
    }
  }
}

import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setAttemptsCount } from '../../store/actions/game.action';
import {
  selectAttemptsData,
  selectCurrentGameStatus,
} from '../../store/selectors/game.selector';
import { selectHexString } from '../../store/selectors/hex.selector';
import { ComparisonComponent } from '../comparison/comparison.component';
import { HeaderComponent } from '../header/header.component';
import { HexGeneratorComponent } from '../hex-generator/hex-generator.component';
import { ResultStatsComponent } from '../result-stats/result-stats.component';
import { InputComponent } from '../ui/input/input.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    HeaderComponent,
    HexGeneratorComponent,
    InputComponent,
    ComparisonComponent,
    ResultStatsComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  inputCode: string = '';
  generatedHexCode: string = '';

  hexCode$!: Observable<string>;
  attemptsCount$!: number;
  gameStatus$!: string;

  constructor(public store: Store) {
    this.hexCode$ = this.store.select(selectHexString);

    this.store.select(selectAttemptsData).subscribe((attemptsCount) => {
      this.attemptsCount$ = attemptsCount.count;
    });

    this.store.select(selectCurrentGameStatus).subscribe((gameStatus) => {
      this.gameStatus$ = gameStatus;
    });
  }

  onInputChange(input: string) {
    this.inputCode = input;

    if (input.length === 6) {
      this.generatedHexCode = `#${input}`;
      this.store.dispatch(setAttemptsCount({ count: this.attemptsCount$ + 1 }));
    }
  }

  ngAfterViewInit() {
    this.hexCode$.subscribe(() => {
      this.inputCode = '';
      this.generatedHexCode = '';
    });
  }
}

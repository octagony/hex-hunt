import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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

  userStringAnswers: Array<{ id: number; char: string; status: boolean }> = [];
  hexArray$?: Array<string>;

  constructor(private store: Store) {
    this.store.select(selectHexArrayString).subscribe((hexArray) => {
      this.hexArray$ = hexArray;
    });
  }

  ngOnInit(): void {
    const stringSplit = this.userString?.split('#').at(1)?.split('')!;
    this.userStringAnswers = stringSplit.map((char, index) => {
      return {
        id: index,
        char,
        status: char === (this.hexArray$ && this.hexArray$[index]) || false,
      };
    });
  }
}

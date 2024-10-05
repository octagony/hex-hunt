import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectHexString } from '../../store/selectors/hex.selector';
import { ComparisonComponent } from '../comparison/comparison.component';
import { HeaderComponent } from '../header/header.component';
import { HexGeneratorComponent } from '../hex-generator/hex-generator.component';
import { InputComponent } from '../ui/input/input.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    HeaderComponent,
    HexGeneratorComponent,
    InputComponent,
    ComparisonComponent,
    NgIf,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  inputCode: string = '';
  hexCode$!: string;
  generatedHexCode: string = '';

  constructor(private store: Store) {
    this.store.select(selectHexString).subscribe((hexString) => {
      this.hexCode$ = hexString;
    });
  }

  onInputChange(input: string) {
    this.inputCode = input;

    if (input.length === 6) {
      this.generatedHexCode = `#${input}`;
    }
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectHexString } from '../../store/selectors/hex.selector';
import { HeaderComponent } from '../header/header.component';
import { HexGeneratorComponent } from '../hex-generator/hex-generator.component';
import { InputComponent } from '../ui/input/input.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HeaderComponent, HexGeneratorComponent, InputComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  inputCode: string = '';
  hexCode$!: string;

  constructor(private store: Store) {
    this.store.select(selectHexString).subscribe((hexString) => {
      this.hexCode$ = hexString;
    });
  }

  onInputChange(input: string) {
    this.inputCode = input;

    if (input.length === 6) {
      console.log(`#${input.toLowerCase()}`);
      console.log(`#${input.toLowerCase()}` === this.hexCode$);
      console.log(this.hexCode$);
    }
  }
}

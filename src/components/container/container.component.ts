import { Component } from '@angular/core';
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

  onInputChange(input: string) {
    this.inputCode = input;
  }
}

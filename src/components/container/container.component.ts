import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HexGeneratorComponent } from '../hex-generator/hex-generator.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HeaderComponent, HexGeneratorComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {}

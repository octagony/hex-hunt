import { Component } from '@angular/core';

@Component({
  selector: 'app-hex-generator',
  standalone: true,
  imports: [],
  templateUrl: './hex-generator.component.html',
  styleUrl: './hex-generator.component.scss',
})
export class HexGeneratorComponent {
  hexCode: string = '';

  generateHexCode() {
    let hexCode = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0 ');
    return `#${hexCode}`;
  }

  ngOnInit(): void {
    this.hexCode = this.generateHexCode();
  }
}

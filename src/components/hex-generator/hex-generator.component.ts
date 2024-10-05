import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetHexAction } from '../../store/hex/hex.actions';
import { ButtonComponent } from '../ui/button/button.component';

@Component({
  selector: 'app-hex-generator',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hex-generator.component.html',
  styleUrl: './hex-generator.component.scss',
})
export class HexGeneratorComponent implements OnInit {
  hexCode: string = '';

  constructor(private store: Store) {}

  generateHexCode() {
    let hexCode = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0 ');
    return `#${hexCode}`;
  }

  ngOnInit(): void {
    this.generateNewColor();
  }

  getNewColor(): void {
    this.generateNewColor();
  }

  private generateNewColor() {
    this.hexCode = this.generateHexCode();
    this.store.dispatch(new SetHexAction(this.hexCode));
  }
}

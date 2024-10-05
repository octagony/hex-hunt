import { Component } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../../store/counter/counter.reducer';
import { HeaderComponent } from '../header/header.component';
import { HexGeneratorComponent } from '../hex-generator/hex-generator.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    HeaderComponent,
    HexGeneratorComponent,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {}

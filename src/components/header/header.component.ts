import { Component } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}

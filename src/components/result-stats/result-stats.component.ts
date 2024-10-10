import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-stats.component.html',
  styleUrl: './result-stats.component.scss',
})
export class ResultStatsComponent {
  @Input() attemptsCount: number = 0;
  @Input() hexString!: Observable<string>;
}

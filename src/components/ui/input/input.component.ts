import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, NgIconsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() size: string = '';
  @Input() invalid: boolean = false;
  @Input() iconName: string = '';
  @Input() maxLength: number = 0;

  @Input() input: string = '';
  @Output() inputChange = new EventEmitter<string>();

  updateInput(event: any): void {
    event && this.inputChange.emit(event?.target?.value);
  }
}

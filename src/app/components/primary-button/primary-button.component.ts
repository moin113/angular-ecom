import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
      <button 
      class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90 transition-all"
      [class.opacity-50]="disabled()"
      [class.cursor-not-allowed]="disabled()"
      [class.hover:opacity-100]="disabled()"
      (click)="!disabled() && btnClicked.emit()"
    >
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
    label = input('')
    disabled = input(false);
    btnClicked = output();
}

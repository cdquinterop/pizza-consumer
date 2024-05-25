import { Component, Input } from '@angular/core';

@Component({
  selector: 'pizza-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title: string = 'Default Title';
  @Input() modalId: string = 'Default';
}

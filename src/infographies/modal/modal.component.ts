import { Component, EventEmitter, Input, HostListener, Output } from '@angular/core';

@Component({
  selector: 'ig-infographies-modal',
  templateUrl: './modal.template.html',
  styleUrls: ['./modal.styles.scss']
})
export default class InfographiesModalComponent {
  @Input() public infography: IInfoDef;
  @Input() public isOpen = false;

  @Output() public closeModal = new EventEmitter<void>();

  public close(): void {
    this.closeModal.emit();
  }

  @HostListener('document:keyup', ['$event'])
  private handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) { this.close(); }
  }
}

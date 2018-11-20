import { Component, EventEmitter, Input, HostListener, Output, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';

@Component({
  selector: 'ig-infographies-modal',
  templateUrl: './modal.template.html',
  styleUrls: ['./modal.styles.scss']
})
export default class InfographiesModalComponent implements OnChanges {
  @Input() public infography: IInfoDef;
  @Input() public isOpen = false;

  @Output() public closeModal = new EventEmitter<void>();
  @Output() public setNextInfography = new EventEmitter<void>();
  @Output() public setPrevInfography = new EventEmitter<void>();

  constructor(private renderer: Renderer2) { }

  public close(): void {
    this.closeModal.emit();
  }

  public goNext(): void {
    this.setNextInfography.emit();
  }

  public goPrev(): void {
    this.setPrevInfography.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isOpen) {
      const { currentValue, previousValue } = changes.isOpen;
      if (currentValue !== previousValue) {
        if (this.isOpen) {
          this.renderer.addClass(document.body, 'disable-scroll');
        }
        else {
          this.renderer.removeClass(document.body, 'disable-scroll');
        }
      }
    }
  }

  @HostListener('document:keyup', ['$event'])
  private handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 27:
        this.close();
        break;
      case 37:
        this.goPrev();
        break;
      case 39:
        this.goNext();
        break;
      default:
        event.preventDefault();
    }
  }
}

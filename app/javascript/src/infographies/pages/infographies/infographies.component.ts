import { Component, Input, OnInit } from '@angular/core';

import InfographiesResource from '../../infographies.resource';
import { PartialObserver } from 'rxjs';

@Component({
  selector: 'ig-infographies',
  templateUrl: './infographies.template.html',
  styleUrls: ['./infographies.styles.scss']
})
export default class InfographiesComponent implements OnInit {
  public infographies:       IInfoDef[] = [];
  public selectedInfography: IInfoDef   = {} as IInfoDef;
  public modalIsOpen                    = false;

  @Input() public pageTitle = 'Infographies';
  @Input() public reducedList = false;

  constructor(private resource: InfographiesResource) {}

  public openModal(infography: IInfoDef): void {
    this.selectedInfography = infography;
    this.modalIsOpen        = true;
  }

  public closeModal(): void {
    this.selectedInfography = {} as IInfoDef;
    this.modalIsOpen        = false;
  }

  public setNextInfography(): void {
    let nextIndex: number = this.infographies.indexOf(this.selectedInfography) + 1;
    if (nextIndex === this.infographies.length) { nextIndex = 0; }

    this.selectedInfography = this.infographies[nextIndex];
  }

  public setPrevInfography(): void {
    let prevIndex: number = this.infographies.indexOf(this.selectedInfography) - 1;
    if (prevIndex < 0) { prevIndex = this.infographies.length - 1; }

    this.selectedInfography = this.infographies[prevIndex];
  }

  ngOnInit() {
    const observer: PartialObserver<IInfoDef[]> = {
      next: (infographies: IInfoDef[]) => {
        this.infographies = infographies;
      },
    };
    if (this.reducedList) {
      this.resource
        .getInfographicsSample()
        .subscribe(observer);
    }
    else {
      this.resource
        .getInfographics()
        .subscribe(observer);
    }
  }
}

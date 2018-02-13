import { Component, Input, OnInit } from '@angular/core';

const infographies = [
  {
    imgSrc: require('../../../../assets/images/infographies/IG-2-hommesFemmes.png'),
    title: 'IG-2-hommesFemmes',
  },
  {
    imgSrc: require('../../../../assets/images/infographies/IG-2-ouvriersRisques.png'),
    title: 'IG-2-ouvriersRisques',
  },
  {
    imgSrc: require('../../../../assets/images/infographies/IG-2-travailPrecarite.png'),
    title: 'IG-2-travailPrecarite',
  }
] as IInfoDef[];

@Component({
  selector: 'ig-infographies',
  templateUrl: './infographies.template.html',
  styleUrls: ['./infographies.styles.scss']
})
export default class InfographiesComponent implements OnInit {
  @Input() public pageTitle = 'Infographies';
  @Input() public reducedList = false;

  public infographies: IInfoDef[] = [];
  public selectedInfography: IInfoDef = {} as IInfoDef;
  public modalIsOpen = false;

  public openModal(infography: IInfoDef): void {
    this.selectedInfography = infography;
    this.modalIsOpen = true;
  }

  public closeModal(): void {
    this.selectedInfography = {} as IInfoDef;
    this.modalIsOpen = false;
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
    if (this.reducedList) {
      this.infographies = infographies.slice(0, 3);
    }
    else {
      this.infographies = infographies;
    }
  }
}

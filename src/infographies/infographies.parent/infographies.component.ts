import { Component, Input } from '@angular/core';

const infographies = [
  {
    imgSrc: require('../../../assets/images/infographies/IG-2-hommesFemmes.png'),
    title: 'IG-2-hommesFemmes',
  },
  {
    imgSrc: require('../../../assets/images/infographies/IG-2-ouvriersRisques.png'),
    title: 'IG-2-ouvriersRisques',
  },
  {
    imgSrc: require('../../../assets/images/infographies/IG-2-travailPrecarite.png'),
    title: 'IG-2-travailPrecarite',
  },
] as IInfoDef[];

@Component({
  selector: 'ig-infographies',
  templateUrl: './infographies.template.html',
  styleUrls: ['./infographies.styles.scss']
})
export default class InfographiesComponent {
  @Input() public pageTitle = 'Infographies';

  public infographies: IInfoDef[] = infographies;
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
}

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent, IonItem, IonList, IonIcon, IonText, ModalController } from '@ionic/angular/standalone';
import { MappaTaglio } from 'src/classes/mappa-taglio';
import { CalcoloTagliUtils } from 'src/utils/calcolo-tagli-utils';

@Component({
  selector: 'modal-taglio',
  templateUrl: './modal-taglio.component.html',
  styleUrls: ['./modal-taglio.component.scss'],
  imports: [CommonModule,
    IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent, IonItem, IonList, IonIcon, IonText]
})
export class ModalTaglioComponent implements OnInit {

  @Input() taglio!: MappaTaglio;
  mappaTagli: MappaTaglio[] = [];

  constructor(private modalCtrl: ModalController, private calcoloTagliUtils: CalcoloTagliUtils) { }

  ngOnInit() {
    this.mappaTagli = this.calcoloTagliUtils.calcolaTagliEMappa(0, this.taglio.getTaglio())[1].map(entry => new MappaTaglio(this.recuperaTaglio(this.taglio.getTaglio())[0], entry.getQuantita() * this.taglio.getQuantita()));
  }

  recuperaTaglio(taglio: number): number[] {
    return this.calcoloTagliUtils.tagli.filter(t => taglio > t);
  }
  chiudi() {
    this.modalCtrl.dismiss();
  }
}



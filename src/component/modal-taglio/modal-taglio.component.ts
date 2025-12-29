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

  @Input() taglioInput!: MappaTaglio;
  mappaTagli: MappaTaglio[] = [];

  constructor(private modalCtrl: ModalController, private calcoloTagliUtils: CalcoloTagliUtils) { }

  ngOnInit() {
    const mappaTagliUtili = this.calcoloTagliUtils.calcolaTagliEMappa(0, this.taglioInput.getTaglio())[1];
    this.mappaTagli = mappaTagliUtili.map(entry => new MappaTaglio(entry.getTaglio(), entry.getQuantita() * this.taglioInput.getQuantita()));
  }

  recuperaTaglio(taglio: number): number[] {
    return this.calcoloTagliUtils.tagli.filter(t => taglio > t);
  }

  chiudi() {
    this.modalCtrl.dismiss();
  }
}



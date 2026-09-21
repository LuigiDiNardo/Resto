import { Component, OnInit } from '@angular/core';
import { ModalTaglioComponent } from '../modal-taglio/modal-taglio.component';
import { ModalController, IonContent, IonGrid, IonLabel, IonItem, IonInput, IonButton, IonList, IonIcon, IonHeader, IonToolbar, IonTitle, IonApp, IonAlert, IonCol, IonRow } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalcoloTagliUtils } from '@src/utils/calcolo-tagli-utils';
import { MappaTaglio } from '@src/classes/mappa-taglio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonContent, IonGrid, IonLabel, IonItem, IonInput, IonButton, IonList, IonIcon, IonAlert, IonCol, IonRow,
    FormsModule, CommonModule, IonHeader, IonToolbar, IonTitle, IonApp],
})
export class HomeComponent {

  resto: number | null = null;
  totale?: number | null;
  pagato?: number | null;
  mappaTagli: MappaTaglio[] = [];


  constructor(private modalCtrl: ModalController, private calcoloTagliUtils: CalcoloTagliUtils) { }

  calcola(totale: any, pagato: any) {
    let res: [number, MappaTaglio[]] = this.calcoloTagliUtils.calcolaTagliEMappa(totale, pagato);
    this.resto = res[0];
    this.mappaTagli = res[1];
  }

  cancella() {
    this.resto = null;
    this.totale = null;
    this.pagato = null;
  }

  async apriModaleTaglioAlternativo(taglioInput: any) {
    const modal = await this.modalCtrl.create({
      component: ModalTaglioComponent,
      componentProps: { taglioInput },
    });
    modal.present();
  }

}

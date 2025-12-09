import { Component, OnInit } from '@angular/core';
import { MappaTaglio } from 'src/classes/mappa-taglio';
import { CalcoloTagliUtils } from 'src/utils/calcolo-tagli-utils';
import { ModalTaglioComponent } from '../modal-taglio/modal-taglio.component';
import { ModalController, IonContent, IonText, IonLabel, IonItem, IonInput, IonButton, IonList, IonIcon, IonHeader, IonToolbar, IonTitle, IonApp } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonContent, IonText, IonLabel, IonItem, IonInput, IonButton, IonList, IonIcon,
    FormsModule, CommonModule, IonHeader, IonToolbar, IonTitle, IonApp],
})
export class HomeComponent {

  resto?: number;
  totale: number | undefined;
  pagato: number | undefined;
  mappaTagli: MappaTaglio[] = [];

  constructor(private modalCtrl: ModalController, private calcoloTagliUtils: CalcoloTagliUtils) { }

  calcola(totale: any, pagato: any) {
    let res: [number, MappaTaglio[]] = this.calcoloTagliUtils.calcolaTagliEMappa(totale, pagato);
    this.resto = res[0];
    this.mappaTagli = res[1];
  }

  async apriModaleTaglioAlternativo(taglio: any) {
    const modal = await this.modalCtrl.create({
      component: ModalTaglioComponent,
      componentProps: { taglio },
    });
    modal.present();
  }

}

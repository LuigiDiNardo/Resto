import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonApp, IonContent, IonLabel, IonInput, IonItem, IonButton, IonList, IonIcon, IonText, ModalController } from '@ionic/angular/standalone';
import { MappaTaglio } from 'src/classes/mappa-taglio';
import { ModalTaglioComponent } from 'src/component/modal-taglio/modal-taglio.component';
import { CalcoloTagliUtils } from 'src/utils/calcolo-tagli-utils';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonContent, IonLabel, IonInput, IonItem, IonButton, IonList,
    FormsModule,
    CommonModule, IonIcon, IonText],
})
export class AppComponent {

  resto?: number;
  totale: number | undefined;
  pagato: number | undefined;
  mappaTagli: MappaTaglio[] = [];

  constructor(private modalCtrl: ModalController, private calcoloTagliUtils: CalcoloTagliUtils) { }

  calcola(totale: any, pagato: any) {
    let res: [number, MappaTaglio[]] = this.calcoloTagliUtils.calcolaTagliEResto(totale, pagato);
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

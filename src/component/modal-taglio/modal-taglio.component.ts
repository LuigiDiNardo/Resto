import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent, IonItem, IonList, IonIcon, IonText, ModalController } from '@ionic/angular/standalone';
import { MappaTaglio } from 'src/classes/mappa-taglio';

@Component({
  selector: 'app-modal-taglio',
  standalone: true,
  templateUrl: './modal-taglio.component.html',
  styleUrls: ['./modal-taglio.component.scss'],
  imports: [ IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent, IonItem, IonList, IonIcon, IonText ]
})
export class ModalTaglioComponent implements OnInit {

  @Input() taglio!: MappaTaglio;
  mappaTagli: MappaTaglio[] = [];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  chiudi() {
      this.modalCtrl.dismiss();
  }
}

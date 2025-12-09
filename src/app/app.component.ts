import { Component } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import { HomeComponent } from 'src/component/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [HomeComponent],
})
export class AppComponent {

}

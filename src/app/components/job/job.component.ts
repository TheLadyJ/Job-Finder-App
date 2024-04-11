import { Component, Input, OnInit } from '@angular/core';
import {
  IonCard,
  IonList,
  IonItem,
  IonLabel,
  IonChip,
  IonButton,
  IonIcon,
  IonThumbnail,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookmark } from 'ionicons/icons';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  standalone: true,
  imports: [
    IonText,
    IonIcon,
    IonButton,
    IonChip,
    IonLabel,
    IonItem,
    IonList,
    IonCard,
    IonThumbnail,
  ],
})
export class JobComponent implements OnInit {
  @Input() job: any;

  constructor() {
    addIcons({ bookmark });
  }

  ngOnInit() {}
}

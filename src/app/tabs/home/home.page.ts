import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonThumbnail,
  IonRow,
  IonCol,
  IonLabel,
  IonText,
  IonSearchbar,
  IonList,
  IonListHeader,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { appsOutline, options } from 'ionicons/icons';
import { IonicSlides } from '@ionic/angular';
import { JobComponent } from 'src/app/components/job/job.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonListHeader,
    IonList,
    IonSearchbar,
    IonText,
    IonLabel,
    IonCol,
    IonRow,
    IonIcon,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonThumbnail,
    JobComponent,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];
  popular: any[] = [];
  recent: any[] = [];

  constructor() {
    addIcons({ appsOutline, options });
  }

  ngOnInit() {
    this.popular = [
      {
        id: 1,
        company: 'Technyks LLC',
        location: 'New Delhi',
        expires_on: '30/11/23',
        post: 'Senior UX Designer',
        type: 'Full Time',
        salary: '$40-90k/year',
        logo_dark: 'ct_dark.png',
        logo_light: 'ct_light.png',
      },
      {
        id: 2,
        company: 'Uber Technologies',
        location: 'Bangalore',
        expires_on: '07/12/23',
        post: 'Full-Stack Developer',
        type: 'Full Time',
        salary: '$30-80k/year',
        logo_dark: 'uber_dark.png',
        logo_light: 'uber_light.png',
      },
      {
        id: 3,
        company: 'LinkedIn Corp.',
        location: 'Mumbai',
        expires_on: '15/12/23',
        post: 'Lead UX Designer',
        type: 'Full Time',
        salary: '$30-70k/year',
        logo_dark: 'linkedin_dark.png',
        logo_light: 'linkedin_light.png',
      },
    ];
    this.recent = [
      {
        id: 4,
        company: 'TikTok',
        location: 'New Delhi',
        expires_on: '30/11/23',
        post: 'Senior UX Designer',
        type: 'Full Time',
        salary: '$40-90k/year',
        logo_dark: 'tiktok_dark.png',
        logo_light: 'tiktok_light.png',
      },
      {
        id: 2,
        company: 'Uber Technologies',
        location: 'Bangalore',
        expires_on: '07/12/23',
        post: 'Full-Stack Developer',
        type: 'Full Time',
        salary: '$30-80k/year',
        logo_dark: 'uber_dark.png',
        logo_light: 'uber_light.png',
      },
      {
        id: 3,
        company: 'LinkedIn Corp.',
        location: 'Mumbai',
        expires_on: '15/12/23',
        post: 'Lead UX Designer',
        type: 'Full Time',
        salary: '$30-70k/year',
        logo_dark: 'linkedin_dark.png',
        logo_light: 'linkedin_light.png',
      },
    ];
  }
}

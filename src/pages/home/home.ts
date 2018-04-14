import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelpRequestsPage } from '../help-requests/help-requests';

export declare module AMap {

  export interface Patient {
    name: string;
    patientDescription: string;
    rescuerDescriptiom: string;
    photoId: string;
    phoneNumber: string;
  }

  export interface Rescuer {
    name: string;
    patientDescription: string;
    rescuerDescriptiom: string;
    photoId: string;
    phoneNumber: string;
  }

  export interface SingleMarker {
    lat: number;
    lng: number;
    title: string;
    description: string;
    informationType: string;
    address: string;
    patient: Patient;
    rescuers: Rescuer[];
    icon: string;
  }

}



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  list() {
    this.navCtrl.push(HelpRequestsPage);
  }

}

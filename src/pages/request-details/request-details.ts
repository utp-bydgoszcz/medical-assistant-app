import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { CallNumber } from '@ionic-native/call-number';
import { AMap } from '../home/home';

/**
 * Generated class for the RequestDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-details',
  templateUrl: 'request-details.html',
})
export class RequestDetailsPage {

  request: AMap.SingleMarker = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private launch: LaunchNavigator, private callNumber: CallNumber) {
    this.request = navParams.get("request");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestDetailsPage');
  }

  path() {
    this.launch.navigate(`${this.request.lat},${this.request.lng}`, {
      transportMode: "walking"
    });
  }

  call() {
    this.callNumber.callNumber(this.request.patient.phoneNumber, true);
  }

  finish() {}

  cancel() {} 

}

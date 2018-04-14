import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HelpRequestProvider } from '../../providers/help-request/help-request';
import { RequestDetailsPage } from '../request-details/request-details';
import { MarkersProvider } from '../../providers/markers/markers';
import { AMap } from '../home/home';

import { Observable} from 'rxjs';
import 'rxjs/add/observable/timer';

/**
 * Generated class for the HelpRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help-requests',
  templateUrl: 'help-requests.html',
})
export class HelpRequestsPage {

  requests: AMap.SingleMarker[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private helpReq: HelpRequestProvider, public toastCtrl: ToastController, private markers: MarkersProvider) {
    Observable.timer(0, 1000).subscribe(
      _ => this.requests = this.markers.otherMarkers
    )
    // this.markers.getStream().subscribe(
    //   x => this.requests = x
    // )
    // this.helpReq.listRequests().subscribe(
    //   person => {
    //     this.requests.push(person);

    //     if (Math.random() < 0.1) {
    //       this.requests.splice(0, 1);
    //     }
    //   }
    // )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpRequestsPage');
  }

  accepted(req: AMap.SingleMarker) {
    this.helpReq.accept(req).subscribe(
      req => {
        let toast = this.toastCtrl.create({
          message: `Zaakceptowano zgłoszenie ${req.patient.name}`,
          duration: 3000
        });
        toast.present();

        this.navCtrl.push(RequestDetailsPage, {
          request: req
        });
      }
    );
  }

  denied(req: AMap.SingleMarker) {
    this.helpReq.deny(req).subscribe(
      _ => {
        let toast = this.toastCtrl.create({
          message: `Odrzucono zgłoszenie ${req.patient.name}`,
          duration: 3000
        });
        toast.present();
        this.requests.splice(this.requests.indexOf(req), 1);
      }
    );
  }

}

import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Person } from '../../components/helper-info/helper-info';
import { AccessProvider } from '../../providers/access/access';

import 'rxjs/add/operator/take';
import { HelpProvider, HelpType } from '../../providers/help/help';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  pageType: HelpType = null

  persons: Person[] = [{
    firstName: "Cezary",
    lastName: "Kolaszewski",
    tel: 881444053,
    img: "https://picsum.photos/200"
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams, private sms: SMS, private access: AccessProvider, public toastCtrl: ToastController, private help: HelpProvider, private gps: Geolocation) {
    this.pageType = <HelpType>this.navParams.get("type");
    this.help.sendHelp(this.pageType).take(2).subscribe(person => this.persons.push(person));
    this.gps.watchPosition({
      enableHighAccuracy: true
    }).throttleTime(3000).subscribe(
      position => {
        this.help.updatePosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: position.timestamp
        }).subscribe(() => {})
      }
    )
  }

  ionViewDidLoad() {
    if (this.pageType === "urgent") {
      this.access.user.notifyOnUrgent ? this.access.user.notifyOnUrgent.forEach(
        notif => this.sms.send(notif.tel, `${notif.name}, ${this.access.user.firstName} ${this.access.user.lastName} pilnie potrzebuje pomocy.`)
      ) : null;
    }
  }

  personDismissed(person: Person) {
    this.help.dismissPerson(person).subscribe(x => {
      let toast = this.toastCtrl.create({
        message: `Odwołano ${person.firstName} ${person.lastName}`,
        duration: 3000
      });
      toast.present();
      this.persons.splice(this.persons.indexOf(person), 1);
    });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../components/helper-info/helper-info';

/**
 * Generated class for the HelpPleasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help-please',
  templateUrl: 'help-please.html',
})
export class HelpPleasePage {

  persons: Person[] = [{
    firstName: "Cezary",
    lastName: "Kolaszewski",
    tel: '',
    img: "https://picsum.photos/200"
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPleasePage');
  }

}

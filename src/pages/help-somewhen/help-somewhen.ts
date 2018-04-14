import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../components/helper-info/helper-info';

/**
 * Generated class for the HelpSomewhenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help-somewhen',
  templateUrl: 'help-somewhen.html',
})
export class HelpSomewhenPage {

  persons: Person[] = [{
    firstName: "Cezary",
    lastName: "Kolaszewski",
    tel: '',
    img: "https://picsum.photos/200"
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpSomewhenPage');
  }

}

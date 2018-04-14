import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AccessProvider, LoginCredentials } from '../../providers/access/access';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private accessService: AccessProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.accessService.autologin().subscribe(
      () => this.navCtrl.setRoot(TabsPage)
    );
  }

  login(loginForm: NgForm) {
    console.log(loginForm);

    this.accessService.login(loginForm.value as LoginCredentials).subscribe(
      () => this.navCtrl.setRoot(TabsPage),
      err => console.error("Login error", err)
    );
  }

}

import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { HelpPage } from '../help/help';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {

  }

  helpMeUrgent() {
    // TODO: Urgent actions...
    this.navCtrl.push(HelpPage, {
      type: "urgent"
    });
  }

  helpMePlease() {
    // TODO: Please actions...
    this.navCtrl.push(HelpPage, {
      type: "important"
    });
  }

  helpMeSomewhen() {
    // TODO: Somewhen actions...
    this.navCtrl.push(HelpPage, {
      type: "regular"
    });
  }

}

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { ToastController } from 'ionic-angular';

export interface Person {
  firstName: string;
  lastName: string;
  tel: string | number;
  img: string;
}

/**
 * Generated class for the HelperInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'helper-info',
  templateUrl: 'helper-info.html'
})
export class HelperInfoComponent {

  @Input() person: Person = null;
  @Output() onPersonDismiss = new EventEmitter<void>();

  constructor(private call: CallNumber, public toastCtrl: ToastController) {
  }

  callMe() {
    console.log(this.person.tel);
    this.call.callNumber(`${this.person.tel}`, true);
  }

  cancelPerson() {
    let toast = this.toastCtrl.create({
      message: 'Odwołuję...',
      duration: 3000
    });
    toast.present();

    this.onPersonDismiss.emit();
  }

}

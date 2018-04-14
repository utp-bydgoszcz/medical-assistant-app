import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AMap } from '../../pages/home/home';

/**
 * Generated class for the HelpRequestComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'help-request',
  templateUrl: 'help-request.html'
})
export class HelpRequestComponent {

  @Input() request: AMap.SingleMarker = null;
  @Output() onRequestAccept = new EventEmitter<void>();
  @Output() onRequestDeny = new EventEmitter<void>();

  constructor() {
  }

  accept() {
    this.onRequestAccept.emit();
  }
  dismiss() {
    this.onRequestDeny.emit();
  }

}

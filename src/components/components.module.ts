import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { AgmCoreModule } from '@agm/core';

import { Geolocation } from "@ionic-native/geolocation";
import { CommonModule } from '@angular/common';
import { HelperInfoComponent } from './helper-info/helper-info';
import { IonicModule } from 'ionic-angular';
import { SMS } from '@ionic-native/sms'
import { HelpRequestComponent } from './help-request/help-request';

@NgModule({
	declarations: [MapComponent,
    HelperInfoComponent,
    HelpRequestComponent],
	imports: [
		CommonModule,
		AgmCoreModule,
		IonicModule
	],
	exports: [MapComponent,
    HelperInfoComponent,
	HelpRequestComponent,
AgmCoreModule],
	providers: [Geolocation, SMS]
})
export class ComponentsModule {}

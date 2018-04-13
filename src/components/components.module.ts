import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { AgmCoreModule } from '@agm/core';
@NgModule({
	declarations: [MapComponent],
	imports: [AgmCoreModule],
	exports: [MapComponent]
})
export class ComponentsModule {}

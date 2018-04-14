import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestDetailsPage } from './request-details';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RequestDetailsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(RequestDetailsPage),
  ],
})
export class RequestDetailsPageModule {}

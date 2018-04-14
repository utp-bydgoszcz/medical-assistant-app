import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpRequestsPage } from './help-requests';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HelpRequestsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HelpRequestsPage),
  ],
})
export class HelpRequestsPageModule {}

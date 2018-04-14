import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpPleasePage } from './help-please';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HelpPleasePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HelpPleasePage),
  ],
})
export class HelpPleasePageModule {}

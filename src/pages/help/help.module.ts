import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpPage } from './help';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HelpPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HelpPage),
  ],
})
export class HelpPageModule {}

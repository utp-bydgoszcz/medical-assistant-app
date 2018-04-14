import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpSomewhenPage } from './help-somewhen';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HelpSomewhenPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HelpSomewhenPage),
  ],
})
export class HelpSomewhenPageModule {}

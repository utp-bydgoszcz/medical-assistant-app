import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccessProvider } from '../providers/access/access';
import { LoginPage } from '../pages/login/login';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';

import { AgmCoreModule } from "@agm/core";

import { LongPressModule } from "ionic-long-press";
import { HelpPageModule } from '../pages/help/help.module';
import { HelpSomewhenPageModule } from '../pages/help-somewhen/help-somewhen.module';
import { HelpPleasePageModule } from '../pages/help-please/help-please.module';
import { FCM } from '@ionic-native/fcm';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { CallNumber } from '@ionic-native/call-number';
import { HelpProvider } from '../providers/help/help';
import { HelpRequestsPageModule } from '../pages/help-requests/help-requests.module';
import { HelpRequestProvider } from '../providers/help-request/help-request';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { RequestDetailsPageModule } from '../pages/request-details/request-details.module';
import { AccessInterceptorProvider } from '../providers/access-interceptor/access-interceptor';
import { MarkersProvider } from '../providers/markers/markers';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAuNFy_pZ8-QWoQW6YxJep20QCEd0RR1vs"
    }),
    LongPressModule,
    HelpPageModule,
    HelpSomewhenPageModule,
    HelpPleasePageModule,
    ComponentsModule,
    HelpRequestsPageModule,
    RequestDetailsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccessProvider,
    FCM,
    AndroidPermissions,
    CallNumber,
    HelpProvider,
    HelpRequestProvider,
    LaunchNavigator,
    {provide: HTTP_INTERCEPTORS, useClass: AccessInterceptorProvider, multi: true},
    MarkersProvider
  ]
})
export class AppModule {}

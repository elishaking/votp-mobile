import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DashoardPage } from '../pages/dashoard/dashoard';
import { PresidentialPage } from '../pages/presidential/presidential';
import { CandidatesPage } from '../pages/candidates/candidates';

@NgModule({
  declarations: [
    MyApp,
    DashoardPage,
    PresidentialPage,
    CandidatesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashoardPage,
    PresidentialPage,
    CandidatesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

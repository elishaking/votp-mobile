import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DashoardPage } from '../pages/dashoard/dashoard';
import { PresidentialPage } from '../pages/presidential/presidential';
import { CandidatesPage } from '../pages/candidates/candidates';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CandidatesPage;
  pages: Array<{ title: string, component: any, icon: string }>;
  currentPage = [];

  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen, private app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Dashboard', component: DashoardPage, icon: "calculator" },
      { title: 'Presidential', component: PresidentialPage, icon: "list-box" },
      { title: 'Matrices', component: CandidatesPage, icon: "grid" },
      // { title: 'Functions', component: FunctionsPage, icon: "pulse" }
    ];

    this.currentPage[0] = this.pages[0];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // console.log(page, this.currentPage[0]);
    if (page != this.currentPage[0]) {
      this.currentPage[0] = page;
      this.nav.setRoot(page.component);
    }
    // this.menu.close();
  }
}


import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CoachPage } from '../pages/coach/coach';
import { LandingPage} from '../pages/landing/landing'
import { TargetPage } from '../pages/target/target';
import { SettingsPage } from '../pages/settings/settings';
import { GoalPage } from '../pages/goal/goal';
import { TrackersPage } from '../pages/trackers/trackers';
import { LoginPage } from '../pages/login/login';
// import { ProgrameOverviewPage } from '../pages/Programe_overview/Programe_overview';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = GoalPage;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any, md:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: HomePage, icon:'ios-person', md:'md-person'},
      { title: 'Nutrition', component: CoachPage, icon: 'ios-nutrition', md:'md-nutrition' },
      { title: 'Trackers', component: TrackersPage, icon:'ios-analytics', md:'md-analytics'},
      { title: 'Settings', component: SettingsPage, icon:'ios-settings', md:'md-settings' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CoachPage } from '../pages/coach/coach';
import { LandingPage } from '../pages/landing/landing'
import { SettingsPage } from '../pages/settings/settings';
import { TrackersPage } from '../pages/trackers/trackers';
import { LoginPage } from '../pages/login/login';
import { GoalPage } from '../pages/goal/goal'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = GoalPage;
  rootPage: any;

  pages: Array<{ title: string, component: any, icon: any, md: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // Sidemenu tabs
    this.pages = [
      { title: 'Profile', component: HomePage, icon: 'ios-person', md: 'md-person' },
      { title: 'Nutrition', component: CoachPage, icon: 'ios-nutrition', md: 'md-nutrition' },
      { title: 'Trackers', component: TrackersPage, icon: 'ios-analytics', md: 'md-analytics' },
      { title: 'Settings', component: SettingsPage, icon: 'ios-settings', md: 'md-settings' }
    ];

    // console.log(JSON.parse(localStorage.getItem("userData")));

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      /*
      @This local storage checking is to check wether the user display the app demo on landing page 
      */
      // this.rootPage = GoalPage;

      if (localStorage.getItem("newuser") == '' || localStorage.getItem("newuser") == 'null' || localStorage.getItem("newuser") == null || localStorage.getItem("newuser") == ('null')) {
        this.rootPage = LandingPage;
      } else {
        // Check user already logined or not
        if (localStorage.getItem("userData") == '' || localStorage.getItem("userData") == 'null' || localStorage.getItem("userData") == null || localStorage.getItem("userData") == ('null')) {
          this.rootPage = LoginPage;
        } else {
          // To check the user entered body details
          if(localStorage.getItem("Calory_Diet")==''|| localStorage.getItem("Calory_Diet")=='null' || localStorage.getItem("Calory_Diet")==null || localStorage.getItem("Calory_Diet")==('null'))
          {
            this.rootPage = GoalPage;
          }else {
            this.rootPage = HomePage;
          }

        }
      }





    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

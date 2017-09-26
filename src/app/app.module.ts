import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { CommonService } from '../pages/services/common.service';
import { SharedService } from '../pages/services/shared.service';
import { NgCalendarModule  } from 'ionic2-calendar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CoachPage } from '../pages/coach/coach';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { forgetPasswordPage } from '../pages/forgetpassword/forgetpassword';
import { GoalPage } from '../pages/goal/goal';
import { TargetPage } from '../pages/target/target';
import { BodyDetails } from '../pages/body_details/body_details';
import { MedicalCondetions } from '../pages/medical_condetions/medical_condetions';
import { SpecialPromoModel } from '../pages/special_promo_model/special_promo_model';
import { Results } from '../pages/results/results';
import { ProgrameOverviewPage } from '../pages/programe_overview/programe_overview';
import { SpecialEventPage } from '../pages/special_event/special_event';
import { SettingsPage } from '../pages/settings/settings';
import { TrackersPage } from '../pages/trackers/trackers'; 
import { PlannerPage } from '../pages/planner/planner';
import { PlannerListPage } from '../pages/plannerlist/plannerlist';
import { FoodListPage } from '../pages/foodlist/foodlist';
import { AnalysisPage } from '../pages/plannerlist/analysis/analysis';
import { ScrollTabsComponent } from '../pages/components/scrolltabs';
import { newTrack } from '../pages/trackers/newtrack/newTrack'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp, HomePage,
    CoachPage,
    LandingPage,
    LoginPage, SignupPage,
    forgetPasswordPage, GoalPage,TargetPage, BodyDetails, MedicalCondetions,SpecialPromoModel,
    Results, ProgrameOverviewPage, SpecialEventPage, SettingsPage, TrackersPage, PlannerPage,ScrollTabsComponent,
    PlannerListPage, FoodListPage, AnalysisPage, newTrack
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonIcon: 'ios-arrow-back',
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CoachPage,
    LandingPage,
    LoginPage, SignupPage,
    forgetPasswordPage, GoalPage, TargetPage, BodyDetails, MedicalCondetions,SpecialPromoModel,
    Results, ProgrameOverviewPage, SpecialEventPage, SettingsPage, TrackersPage, PlannerPage,
    PlannerListPage, FoodListPage, AnalysisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CommonService,SharedService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

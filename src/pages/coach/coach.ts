import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProgrameOverviewPage } from '../../pages/programe_overview/programe_overview';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import { SpecialEventPage } from '../../pages/special_event/special_event';
import { CONSTANTS } from '../../pages/services/config.service'
@Component({
  selector: 'coach',
  templateUrl: 'coach.html'
})
export class CoachPage {

  private homeData: any;
  private specialData: any;
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  // type = 'specialEvent';
  // goal = 'stay fit';
  // gender = 'male';
  // diet = 1200;
  // expendeture = 1200;
  // bmr = 1550;
  // body_id = 2;
  // orientation = 'veg';
  constructor(public navCtrl: NavController, public navParams: NavParams, public _commonService: CommonService, public SharedService: SharedService) {

    var userData = JSON.parse(localStorage.getItem("userData"));
    userData.user_id = 6;
    this._commonService.httpPostMethodCall('getHomedata', { 'userid': userData.user_id }).subscribe(
      response => {
        console.log(response);

        this.homeData = response.data;
        this.specialData = response.specialData;
        localStorage.setItem("Calory_Diet",this.homeData.body_calory_diet);
        if (response.status) {

        }
      },
      error => {
        this.SharedService.errorHandling(error);
      });

  }

  regularDiet() {
    if (this.specialData.length != "") {

      this.SharedService.alertFunction(CONSTANTS.specialevent);

    } else {
      this.navCtrl.push(ProgrameOverviewPage, { type: CONSTANTS.coachTypeRegular, goal: this.homeData.body_goal, gender: this.homeData.body_gender, diet: this.homeData.body_calory_diet, expendeture: this.homeData.body_calerie_expendeture, bmr: this.homeData.body_bmr, body_id: this.homeData.body_id, orientation: this.homeData.body_orientation });

    }

  }
  specialEvent() {

    if (this.specialData.length != "") {

      this.navCtrl.push(ProgrameOverviewPage, { type: CONSTANTS.coachTypeSpecial, goal: this.homeData.body_goal, gender: this.homeData.body_gender, diet: this.homeData.body_calory_diet, expendeture: this.homeData.body_calerie_expendeture, bmr: this.homeData.body_bmr, body_id: this.homeData.body_id, orientation: this.homeData.body_orientation });

    } else {
      this.navCtrl.push(SpecialEventPage, { type: CONSTANTS.coachTypeSpecial, goal: this.homeData.body_goal, gender: this.homeData.body_gender, diet: this.homeData.body_calory_diet, expendeture: this.homeData.body_calerie_expendeture, bmr: this.homeData.body_bmr, body_id: this.homeData.body_id, orientation: this.homeData.body_orientation });
    }


  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });
  }
}

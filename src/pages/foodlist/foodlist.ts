/**
 * Created by ubic on 23/04/17.
 */
import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, NavParams, Navbar } from 'ionic-angular';
import { IScrollTab, ScrollTabsComponent } from '../../pages/components/scrolltabs';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import { CONSTANTS } from '../services/config.service';
import * as _ from 'lodash';

@Component({
  selector: 'foodlist',
  templateUrl: 'foodlist.html'
})
export class FoodListPage {

  @ViewChild(Navbar) navBar: Navbar;
  emptyImagepath: any = CONSTANTS.emptyImagepath;
  selectedRow: number;
  selectedList = [];
  index1: any;
  index2: any;
  selectedFood: any;
  plannerId: number;
  subPlannerId: number;
  plannerData = JSON.parse(localStorage.getItem("planner"));
  selectedArray = [];
  calorieInMeal: any;
  calorieAdded = 0;

  tabs: IScrollTab[] = [
    {
      type_name: "",
      item: [
        {
          "name": "",
          "img": null,
          "status": false,
          "types": [
            {
              "calorie": "",
              "serving_size": "",
              "quantity": '',
              "image": null
            }
          ]
        }]
    }

  ];
  selectedTab: IScrollTab;
  @ViewChild('scrollTab') scrollTab: ScrollTabsComponent;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public _commonService: CommonService, public SharedService: SharedService) {

    this.index1 = navParams.get('index1');
    this.calorieInMeal = navParams.get('calorieInMeal');

    if (!this.selectedArray) {
      this.selectedArray = [];
    }
  }

  ionViewDidEnter() {
    this.scrollTab.go2Tab(0);
  }

  tabChange(data: any) {

    this.selectedTab = data.selectedTab;
    this.selectedList = this.selectedTab.item;

  }

  toggleDiv(index) {
    this.selectedRow = null;
    if (this.selectedList[index].status) {
      this.selectedList[index].status = false;
    } else {
      this.selectedList[index].status = true;
    }
  }

  calorieCalculation(calorie) {
    var calorieAdded = 0;
    var plannerId = this.plannerId;
    var subPlannerId = this.subPlannerId
    _.forEach(this.selectedArray, function (value) {
      if (value.plannerid == plannerId) {
        if (value.subplannerid != subPlannerId) {
          calorieAdded += Math.round(calorieAdded + parseInt(value.calorie));
        }
      }

    });
    calorieAdded += Math.round(parseInt(calorie));
    if (calorieAdded > this.calorieInMeal) {
      return false;
    }
    else {
      return true;
    }

  }

  selectFood(data, index, typeindex) {


    if (localStorage.getItem("selectedArray")) {
      this.selectedArray = JSON.parse(localStorage.getItem("selectedArray"));
    }

    if (!this.calorieCalculation(data.calorie)) {
      this.SharedService.alertFunction(CONSTANTS.selectionOver);
      return;
    }
    else {
      this.selectedRow = typeindex;
      var selectedDatas = {
        name: this.selectedList[index].name,
        img: this.selectedList[index].img,
        plannerid: this.plannerId,
        subplannerid: this.subPlannerId,
        calorie: data.calorie,
        serving_size: data.serving_size,
        quantity: data.quantity,
        image: data.image,
        dietpercentage: this.navParams.get('dietPercentage')
      }
      var newArray = [];
      var checkFountContent = _.find(this.selectedArray, { 'plannerid': this.plannerId, 'subplannerid': this.subPlannerId });
      if (!checkFountContent) {
        newArray = this.selectedArray.concat(selectedDatas);

      } else {

        var plannerId = this.plannerId;
        var subPlannerId = this.subPlannerId;

        _.forEach(this.selectedArray, function (value, key) {
          // if (value.plannerid != plannerId && value.subplannerid != subPlannerId) {
          //   newArray.push(value);
          // } else if (value.quantity != selectedDatas.quantity || value.serving_size != selectedDatas.serving_size) {
          //   newArray.push(selectedDatas)
          // }
          if (value.plannerid == plannerId && value.subplannerid == subPlannerId) {

            // if (value.quantity != selectedDatas.quantity || value.serving_size != selectedDatas.serving_size) {
            newArray.push(selectedDatas)
            // }else {

            // }
          } else {
            newArray.push(value);
          }
        });
      }
      localStorage.setItem("selectedArray", JSON.stringify(newArray))
      this.navCtrl.pop();
    }

  }

  ngOnInit() {
    this.index1 = this.navParams.get('index1');
    this.plannerId = this.navParams.get('plannerId');
    this.subPlannerId = this.navParams.get('subPlannerId');
    var plan1 = this.navParams.get('plan1');
    var plan2 = this.navParams.get('plan2');
    var type = this.navParams.get('type');
    var dietPercentage = this.navParams.get('dietPercentage');
    var userData = JSON.parse(localStorage.getItem("userData"));
    var orientation = localStorage.getItem('orientation');

    if (this.subPlannerId == 8 || this.subPlannerId == 9) {
      var subId = 2;
    } else {
      var subId = this.subPlannerId;
    }

    var data = {
      user_id: userData.user_id,
      orientation: 1,
      location: userData.user_location,
      meal: this.plannerId,
      sub_meal: this.subPlannerId,
      calorie1: plan1,
      calorie2: plan2
    }
    this.selectedList = [];
    this._commonService.httpPostMethodAdmin('user_foods', data).subscribe(
      response => {
        console.log(response)
        this.tabs = response;
        this.selectedTab = response[0];
        if (response.length > 0) {
          this.selectedList = response[0].item;
        } else {
          this.selectedList = [];
        }

      },
      error => {
        this.SharedService.errorHandling(error);
      });
  }

}

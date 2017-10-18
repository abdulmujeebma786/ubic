/**
 * Created by ubic on 23/04/17.
 */
import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { PlannerListPage } from '../../pages/plannerlist/plannerlist';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
// import { CONSTANTS } from '../services/config.service';
// import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
    selector: 'planner',
    templateUrl: 'planner.html'
})
export class PlannerPage {
    calorieProgress = 0;
    plannerData = JSON.parse(localStorage.getItem("planner"));
    calorieDiet: number;
    selectedArray = JSON.parse(localStorage.getItem("selectedArray"));
    calorieAdded = 0;
    calorieLeft = 0;
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public _commonService: CommonService, public SharedService: SharedService) {

        // this.getData()
        // this.
        this.plannerData = JSON.parse(localStorage.getItem("planner"));
        this.calorieDiet = parseInt(navParams.get('diet'));


    }

    getData() {
        // this._commonService.httpGetMethodCallOData('meals'). subscribe(
        //         response => {
        //             console.log(response);
        //         },
        //         error => {
        //             this.SharedService.errorHandling(error);
        //         }
        // );
    }

    goToPlannerList(item, index) {
        // var index = _.findIndex(this.plannerData, { 'id': item.id });
        this.navCtrl.push(PlannerListPage, { index: index, calorieDiet: this.calorieDiet });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    initialCalculation() {
        var calorieAdded = 0;
        _.forEach(this.selectedArray, function (value) {

            calorieAdded = Math.round(calorieAdded + parseInt(value.calorie));
        });
        this.calorieAdded = calorieAdded
        this.calorieLeft = (this.calorieDiet - this.calorieAdded);
        this.calorieProgress = Math.round((this.calorieAdded / this.calorieDiet) * 100);
    }

    ionViewWillEnter() {
        this.selectedArray = JSON.parse(localStorage.getItem("selectedArray"));
        if (this.selectedArray) {
            this.initialCalculation();
        }
    }

    ngOnInit() {

    }

    submitdata(){
        
    }
}

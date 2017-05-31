/**
 * Created by ubic on 23/04/17.
 */
import { Component } from '@angular/core';
import { ModalController, NavController, Platform, ViewController } from 'ionic-angular';
import { PlannerListPage } from '../../pages/plannerlist/plannerlist';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import { CONSTANTS } from '../services/config.service';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
    selector: 'planner',
    templateUrl: 'planner.html'
})
export class PlannerPage {
    
    plannerData = JSON.parse(localStorage.getItem("planner"));
    
    
    constructor(public navCtrl: NavController,public viewCtrl : ViewController, public _commonService : CommonService, public SharedService:SharedService) {

        // this.getData()
        this.plannerData = JSON.parse(localStorage.getItem("planner"));
        
    }

    getData(){
        // this._commonService.httpGetMethodCallOData('meals'). subscribe(
        //         response => {
        //             console.log(response);
        //         },
        //         error => {
        //             this.SharedService.errorHandling(error);
        //         }
        // );
    }

    goToPlannerList(item){
        var index = _.findIndex(this.plannerData, { 'id': item.id});
        this.navCtrl.push(PlannerListPage,{index:index, length:item.selected.length});
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}

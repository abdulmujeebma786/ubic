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
@Component({
    selector: 'planner',
    templateUrl: 'planner.html'
})
export class PlannerPage {
    
    plannerData = JSON.parse(localStorage.getItem("planner"));
    
    
    constructor(public navCtrl: NavController,public viewCtrl : ViewController, public _commonService : CommonService, public SharedService:SharedService) {

        // this.getData()
        
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

    goToPlannerList(item, index){
        console.log(item)
        console.log(index);
        this.navCtrl.push(PlannerListPage,{});
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}

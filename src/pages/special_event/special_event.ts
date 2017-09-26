/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
// import { HomePage } from '../../pages/home/home';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import { CONSTANTS } from '../services/config.service';
import * as moment from 'moment';

@Component({
    selector: 'special_event',
    templateUrl: 'special_event.html'
})
export class SpecialEventPage {
    special = {'event':'Getting Engaged','weight':'','date':'','accelarate':1}
    maxDate = '';
    minDate = '';
    private Apibodydetails :any;
    constructor(public navCtrl: NavController, public _commonService : CommonService, public SharedService:SharedService, public navParams: NavParams) {
        this.maxDate = moment().add(10, 'y').format('YYYY-MM-DD');
        this.minDate = moment().startOf('day').format('YYYY-MM-DD');
    }

    Submit(item) {
        if(this.SharedService.validation(item.weight)){
            this.SharedService.alertFunction(CONSTANTS.ValidationTargetweight);
            return;
        }
        if(this.SharedService.validation(item.date)){
            this.SharedService.alertFunction(CONSTANTS.TargetdateValidation);
            return;
        }
        this.Apibodydetails = {userid:1,weight:item.weight,event:item.event,date:item.date,level:item.accelarate,deficit:'',calorie_diet:''};
                    
        this._commonService.httpPostMethodCall('submitSpecialEvent',this.Apibodydetails). subscribe(
                response => {
                    console.log(response);
                    // if(response){
                    //     this.navCtrl.push(Results,{bmi: BMI ,bmiStatus: BmiStatus,calorieexpendetur: Calery_Expendeture, caloriediet : Calory_Dietperday,resultStatus: resultmessage})
                    // }
                    this.navCtrl.push(SpecialEventPage, { type: this.navParams.get('type'), goal: this.navParams.get('goal'), gender: this.navParams.get('gender'), diet: this.navParams.get('diet'), expendeture: this.navParams.get('expendeture'), bmr: this.navParams.get('bmr'), body_id: this.navParams.get('body_id'), orientation: this.navParams.get('orientation') });
   
                },
                error => {
                    this.SharedService.errorHandling(error);
                });

        }

}
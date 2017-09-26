/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BodyDetails } from '../body_details/body_details';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import * as moment from 'moment';

import { CONSTANTS } from '../services/config.service';

@Component({
    selector: 'page-target',
    templateUrl: 'target.html'
})
export class TargetPage {
    goaltype: any;
    target = {'targetKg':'','targetdate':''};
    maxDate = '';
    minDate = '';
    constructor(public navCtrl: NavController, public navParams : NavParams, public shared:SharedService, public _commonService: CommonService) {

        this.goaltype = navParams.get('goaltype');
        this.maxDate = moment().add(10, 'y').format('YYYY-MM-DD');
        this.minDate = moment().startOf('day').format('YYYY-MM-DD');

    }

    SubmitTarget(target){
        if(this.shared.validation(target.targetKg)){
            this.shared.alertFunction(CONSTANTS.ValidationTargetweight);
            return;
        }

        if(this.shared.validation(target.targetdate)){
            this.shared.alertFunction(CONSTANTS.TargetdateValidation);
            return;
        }
        this.navCtrl.push(BodyDetails,{goaltype:this.goaltype,targetKg:target.targetKg,targetdate:target.targetdate});
    }



}

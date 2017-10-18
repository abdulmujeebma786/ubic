/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Results } from '../results/results';
import { MedicalCondetions } from '../medical_condetions/medical_condetions';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import * as moment from 'moment';

import { CONSTANTS } from '../services/config.service';

@Component({
    selector: 'body_details',
    templateUrl: 'body_details.html'
})
export class BodyDetails {

    maxDate = '';
    minDate = '';
    goaltype: any;
    targetkg: number;
    targetDate: any;
    Apibodydetails: any;
    Bodydetails = { 'gender': '', 'currentweight': '', 'currentheight': '', 'birthday': '', 'orientation': '', 'medicalCondetions': 'dsfdf', 'userlevel': '1', 'levelFactor': '' }
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public _commonService: CommonService, public SharedService: SharedService) {
        this.goaltype = navParams.get('goaltype');
        this.targetkg = navParams.get('targetKg');
        this.targetDate = navParams.get('targetdate');
        this.minDate = moment().add(-100, 'y').format('YYYY-MM-DD');
        this.maxDate = moment().startOf('day').format('YYYY-MM-DD');
    }

    openPop() {
        let modal = this.modalCtrl.create(MedicalCondetions);
        modal.onDidDismiss(data => {
            // this.Bodydetails.medicalCondetions = data;
        });
        modal.present();
    }

    submitBody(Bodydetails) {

        var a, b, c, d, e = '';
        if (this.SharedService.validation(Bodydetails.gender) || this.SharedService.validation(Bodydetails.currentweight) || this.SharedService.validation(Bodydetails.currentheight) || this.SharedService.validation(Bodydetails.birthday) || this.SharedService.validation(Bodydetails.orientation) || this.SharedService.validation(Bodydetails.medicalCondetions)) {
            this.SharedService.alertFunction(CONSTANTS.allfields);
            return;
        }
        if (this.goaltype == 'Achive Goal') {
            if (Bodydetails.currentweight < this.targetkg) {
                this.SharedService.alertFunction(CONSTANTS.weightvalidation);
                return
            }
        }

        // Physical level factor calculation
        if (Bodydetails.gender == 'woman') {
            switch (parseInt(Bodydetails.userlevel)) {
                case 1: Bodydetails.levelFactor = 1;
                    break;
                case 2: Bodydetails.levelFactor = 1.1;
                    break;
                case 3: Bodydetails.levelFactor = 1.2;
                    break;
                case 4: Bodydetails.levelFactor = 1.375;
                    break;
                case 5: Bodydetails.levelFactor = 1.45;
                    break;
            }
            a = 655; b = 9.6; c = 1.8; d = 4.7;

        } else {
            switch (parseInt(Bodydetails.userlevel)) {
                case 1: Bodydetails.levelFactor = 1;
                    break;
                case 2: Bodydetails.levelFactor = 1.2;
                    break;
                case 3: Bodydetails.levelFactor = 1.375;
                    break;
                case 4: Bodydetails.levelFactor = 1.55;
                    break;
                case 5: Bodydetails.levelFactor = 1.725;
            }
            a = 66; b = 13.7; c = 5; d = 6.8;
        }
        var age = moment().diff(Bodydetails.birthday, 'years', false);
        var BMR = a + (b * Bodydetails.currentweight) + (c * Bodydetails.currentheight) - (d * age);
        var Calery_Expendeture = Math.round(BMR * Bodydetails.levelFactor);
        var TargetDays = 0;
        if (this.goaltype == 'Stay Fit') {
            var Calory_Diet = Math.round(Calery_Expendeture);
            TargetDays = 0;
            var resultmessage = 'Stay Fit';
            this.targetDate = 0;
            this.targetkg = 0;
        } else {
            var Calory_Diet = Math.round(Calery_Expendeture - 300);
            var resultmessage = 'healthy weight loss';
            var today = moment(new Date());
            var targetdate = moment(this.targetDate);
            TargetDays = targetdate.diff(today, 'days');
        }

        var BmiHeight = (Bodydetails.currentheight / 100)
        var height_squre = (BmiHeight * BmiHeight);
        var BMI = Math.round(Bodydetails.currentweight / height_squre);
        if (BMI < 18)
        { var BmiStatus = "Underweight" }
        else if (BMI >= 18 && BMI <= 24)
        { var BmiStatus = "Healthy" }
        else if (BMI > 24 && BMI < 30)
        { var BmiStatus = "Overweight" }
        else if (BMI >= 30)
        { var BmiStatus = "Obese" }
        var Calory_Dietperday = Math.round(Calory_Diet * Bodydetails.levelFactor);
        var userData = JSON.parse(localStorage.getItem("userData"));

        this.Apibodydetails = {
            'userid': userData.user_id,
            'goal': this.goaltype,
            'special_event': '',
            'target_weight': this.targetkg,
            'target_date': this.targetDate,
            'orientation': Bodydetails.orientation,
            'physical_level': Bodydetails.userlevel,
            'gender': Bodydetails.gender,
            'current_weight': Bodydetails.currentweight,
            'current_height': Bodydetails.currentheight,
            'birth_day': Bodydetails.birthday,
            'medical_condetion': Bodydetails.medicalCondetions,
            'age': age,
            'physical_levelFactor': Bodydetails.levelFactor,
            'bmr': BMR,
            'bmi': BMI,
            'calerie_expendeture': Calery_Expendeture,
            'calory_diet': Calory_Diet,
            'bmi_status': BmiStatus,
            'target_days': TargetDays
        }
        this._commonService.httpPostMethodCall('userBodydetails', this.Apibodydetails).subscribe(
            response => {
                if (response) {
                    localStorage.setItem("Calory_Diet", '1')
                    this.navCtrl.push(Results, { bmi: BMI, bmiStatus: BmiStatus, calorieexpendetur: Calery_Expendeture, caloriediet: Calory_Dietperday, resultStatus: resultmessage })
                }
            },
            error => {
                this.SharedService.errorHandling(error);
            });

    }


}
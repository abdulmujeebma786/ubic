/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
// import { HomePage } from '../../pages/home/home';
import { PlannerPage } from '../../pages/planner/planner';
import { SpecialPromoModel } from '../../pages/special_promo_model/special_promo_model'
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import { CONSTANTS } from '../services/config.service';
// import * as moment from 'moment';

@Component({
    selector: 'programe-overview',
    templateUrl: 'programe_overview.html'
})
export class ProgrameOverviewPage {
    
    mealsCount: any;
    accelarate: any;
    activityLevel: any = 1;
    phy_level: any;
    bodyBmr: any;
    calculatedExpendeture: any;
    mealsCounts: any;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public _commonService: CommonService, public SharedService: SharedService, public navParams: NavParams) {

        this.bodyBmr = this.navParams.get('bmr')
        this.calculatedExpendeture = this.navParams.get('expendeture');
        this.activityLevel = 1;
        if (this.navParams.get('type') == CONSTANTS.coachTypeSpecial) {
            this.accelarate = 1;
        }
    }
   
    setPlanner(mealsCount) {

        this.mealsCounts = mealsCount;
        this.SharedService.SetplannerData(mealsCount);

    }

    checkAccelarate() {
        if (this.navParams.get('type') == CONSTANTS.coachTypeSpecial) {

            // Get calorie defecit based on the selected value
            if (this.accelarate == '2' || this.accelarate == '1') {
                var calorie_deficit = 300;
            }
            else if (this.accelarate == '3' || this.accelarate == '4') {
                var calorie_deficit = 400;
            } else {
                var calorie_deficit = 500;
            }
            // Assigning calculation based on the calorie defecit
            if (this.navParams.get('expendeture') > 1000) {
                this.calculatedExpendeture = (this.navParams.get('expendeture') - calorie_deficit);
            }
            else {
                this.calculatedExpendeture = this.navParams.get('expendeture');
            }
        } else {
            let modal = this.modalCtrl.create(SpecialPromoModel);
            modal.present();
            this.accelarate = '';
        }

    }

    setActivity() {

        // GETTING CORRESPONDING VALUES BASED ON THE SELECTED
        var values = this.SharedService.physicalLevelCalculation(parseInt(this.activityLevel), this.navParams.get('gender'));
        if (this.navParams.get('goal') != 'Stay Fit') {
            var values = this.SharedService.physicalLevelCalculation(parseInt(this.activityLevel), this.navParams.get('gender'));
            this.bodyBmr = (this.navParams.get('bmr') * values.level) - 300;
            var calcDiffrence = Math.round(this.bodyBmr - this.navParams.get('bmr'));
            this._commonService.showToast(calcDiffrence + ' calories added to Planner', 'bottom');
        } else {
            this._commonService.showToast('Physical Activity Not Affected on StayFit users', 'bottom');
        }
    }

    SubmitMeals() {
        if (this.SharedService.validation(this.mealsCount)) {
            this.SharedService.alertFunction(CONSTANTS.mealsCount);
            return;
        }
        this.navCtrl.push(PlannerPage, { meals: this.mealsCounts, bmr: this.bodyBmr, expendeture: this.calculatedExpendeture, diet: this.navParams.get('diet'), orientation: this.navParams.get('orientation') });
        // this.nav.setRoot(HomePage);
    }

    
    
}
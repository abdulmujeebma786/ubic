/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { PlannerPage } from '../../pages/planner/planner';
import { SpecialPromoModel } from '../../pages/special_promo_model/special_promo_model'
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import { CONSTANTS } from '../services/config.service';
import * as moment from 'moment';

@Component({
    selector: 'programe-overview',
    templateUrl: 'programe_overview.html'
})
export class ProgrameOverviewPage {

    orientation= '';
    accelarate = '';
    constructor(public navCtrl: NavController, public modalCtrl: ModalController,public _commonService : CommonService, public SharedService:SharedService) {
        

    }

    setPlanner(orientation){
        this.SharedService.SetplannerData(orientation);
        
    }
    checkAccelarate(){

        let modal = this.modalCtrl.create(SpecialPromoModel);
        // modal.onDidDismiss();
        modal.present();
        console.log(this.accelarate);
        this.accelarate = '';
    }

    setActivity(){

    }
    
    SubmitMeals(){
        if(this.SharedService.validation(this.orientation)){
            this.SharedService.alertFunction(CONSTANTS.orientation);
            return;
        }
        // console.log(this.orientation);
        this.navCtrl.push(PlannerPage);
        // this.nav.setRoot(HomePage);
    }
}
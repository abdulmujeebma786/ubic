/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { PlannerPage } from '../../pages/planner/planner';

@Component({
    selector: 'programe-overview',
    templateUrl: 'programe_overview.html'
})
export class ProgrameOverviewPage {

    
    constructor(public navCtrl: NavController) {
        

    }

    SubmitMeals(){
        this.navCtrl.push(PlannerPage);
        // this.nav.setRoot(HomePage);
    }
}
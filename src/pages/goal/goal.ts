/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TargetPage } from '../target/target';
import { BodyDetails } from '../body_details/body_details';
@Component({
    selector: 'page-goal',
    templateUrl: 'goal.html'
})
export class GoalPage {

    constructor(public navCtrl: NavController) {

    }

    selectGoal(goal) {
        switch (goal){
            case  'Achive Goal' :
                    this.navCtrl.push(TargetPage,{goaltype:goal});
                    break;
            case 'Stay Fit':
                    this.navCtrl.push(BodyDetails,{goaltype:goal});
                    break;
        }

      
    }

}

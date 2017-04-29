/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TargetPage } from '../target/target';
@Component({
    selector: 'page-goal',
    templateUrl: 'goal.html'
})
export class GoalPage {

    constructor(public navCtrl: NavController) {

    }

    selectGoal(goal) {
      this.navCtrl.push(TargetPage);
    }

}

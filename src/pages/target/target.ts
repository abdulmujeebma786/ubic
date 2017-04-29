/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BodyDetails } from '../body_details/body_details';
import * as moment from 'moment';

@Component({
    selector: 'page-target',
    templateUrl: 'target.html'
})
export class TargetPage {
    maxDate = '';
    minDate = '';
    constructor(public navCtrl: NavController) {
        this.maxDate = moment().add(10, 'y').format('YYYY-MM-DD');
        this.minDate = moment().startOf('day').format('YYYY-MM-DD');
    }

    SubmitTarget(){
        this.navCtrl.push(BodyDetails);
    }



}

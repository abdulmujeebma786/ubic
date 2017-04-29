/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import * as moment from 'moment';

@Component({
    selector: 'special_event',
    templateUrl: 'special_event.html'
})
export class SpecialEventPage {

    maxDate = '';
    minDate = '';
    constructor(public navCtrl: NavController) {
        this.maxDate = moment().add(10, 'y').format('YYYY-MM-DD');
        this.minDate = moment().startOf('day').format('YYYY-MM-DD');
    }

}
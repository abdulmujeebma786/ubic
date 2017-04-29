/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
    selector: 'results',
    templateUrl: 'results.html'
})
export class Results {

    maxDate = '';
    minDate = '';
    boxItems = [];
    activeBox = 1;
    constructor(public navCtrl: NavController) {

        

    }

    nextPage(){
        this.navCtrl.push(HomePage);
        // this.nav.setRoot(HomePage);
    }
}
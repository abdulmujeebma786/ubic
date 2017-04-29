/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { ModalController, NavController, ViewController } from 'ionic-angular';
import { NgClass } from 'angular2/common';
import { Results } from '../results/results';
import { MedicalCondetions } from '../medical_condetions/medical_condetions';
import * as moment from 'moment';

@Component({
    selector: 'body_details',
    templateUrl: 'body_details.html'
})
export class BodyDetails {
    maxDate = '';
    minDate = '';
    boxItems = [];
    activeBox = 1;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

        this.minDate = moment().add(-100, 'y').format('YYYY-MM-DD');
        this.maxDate = moment().startOf('day').format('YYYY-MM-DD');

        this.boxItems = [
            { id: 1, class: "slider-box box1", title: "Low" },
            { id: 2, class: "slider-box box2", title: "" },
            { id: 3, class: "slider-box box3", title: "Moderate" },
            { id: 4, class: "slider-box box4", title: "" },
            { id: 5, class: "slider-box box5", title: "High" }
        ];

    }

    openPop(){
        let modal = this.modalCtrl.create(MedicalCondetions);
        modal.present();
    }

    submitBody(){
        this.navCtrl.push(Results)
    }


}
/**
 * Created by ubic on 23/04/17.
 */
import { Component } from '@angular/core';
import { ModalController, NavController, Platform, ViewController } from 'ionic-angular';

@Component({
    selector: 'MedicalCondetions',
    templateUrl: 'medical_condetions.html'
})
export class MedicalCondetions {

    public medicalCondetions = [];
    constructor(public navCtrl: NavController,public viewCtrl : ViewController, public modalCtrl: ModalController, public platform : Platform) {

        this.medicalCondetions = [{id:1,name:'feaver'},{id:1,name:'feaver'},{id:1,name:'feaver'},{id:1,name:'feaver'},{id:1,name:'feaver'},{id:1,name:'feaver'},{id:1,name:'feaver'}];


    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}

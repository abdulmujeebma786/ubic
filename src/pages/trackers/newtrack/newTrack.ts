/**
 * Created by ubic on 23/04/17.
 */
import { Component } from '@angular/core';
import { ModalController, NavController, Platform, ViewController } from 'ionic-angular';
import * as _ from 'lodash';
@Component({
    selector: 'newTrack',
    templateUrl: 'newTrack.html'
})
export class newTrack {
    selectedMedicals = [];
    public medicalCondetions = [];
    constructor(public navCtrl: NavController,public viewCtrl : ViewController, public modalCtrl: ModalController, public platform : Platform) {


    }
    dismiss() {

        this.viewCtrl.dismiss()
    }

    submit(){
        this.viewCtrl.dismiss(this.selectedMedicals)
    }
}

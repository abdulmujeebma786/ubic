/**
 * Created by ubic on 23/04/17.
 */
import { Component } from '@angular/core';
import { ModalController, NavController, Platform, ViewController } from 'ionic-angular';
// import * as _ from 'lodash';
@Component({
    selector: 'SpecialPromo',
    templateUrl: 'special_promo_model.html'
})
export class SpecialPromoModel {

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController, public platform: Platform) {



    }
    dismiss() {

        this.viewCtrl.dismiss()
    }

    submit() {
        this.viewCtrl.dismiss()
    }


}

/**
 * Created by ubic on 23/04/17.
 */
import { Component } from '@angular/core';
import { ModalController, NavController, Platform, ViewController } from 'ionic-angular';
import * as _ from 'lodash';
@Component({
    selector: 'MedicalCondetions',
    templateUrl: 'medical_condetions.html'
})
export class MedicalCondetions {
    selectedMedicals = [];
    public medicalCondetions = [];
    constructor(public navCtrl: NavController,public viewCtrl : ViewController, public modalCtrl: ModalController, public platform : Platform) {

        this.medicalCondetions = [{id:1,name:'feaver'},{id:2,name:'feaver'},{id:3,name:'feaver'},{id:4,name:'feaver'},{id:5,name:'feaver'},{id:6,name:'feaver'},{id:7,name:'feaver'}];


    }

    selectmedical(item){

        if(_.find(this.selectedMedicals, { 'id': item.id}) == undefined){
            this.selectedMedicals.push(item);
        }
        else{
            var index = _.findIndex(this.selectedMedicals, { 'id': item.id});
            this.selectedMedicals.splice(index,1);
        }
    }

    dismiss() {

        this.viewCtrl.dismiss()
    }

    submit(){
        this.viewCtrl.dismiss(this.selectedMedicals)
    }
}

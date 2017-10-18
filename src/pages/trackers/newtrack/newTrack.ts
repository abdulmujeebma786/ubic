/**
 * Created by ubic on 23/04/17.
 */
import { Component } from '@angular/core';
import { ModalController, NavController, Platform, ViewController } from 'ionic-angular';
import { CommonService } from '../../services/common.service';
import { SharedService } from '../../services/shared.service';
import { CONSTANTS } from '../../services/config.service';
@Component({
    selector: 'newTrack',
    templateUrl: 'newTrack.html'
})
export class newTrack {

    fat:'';
    weight:'';
    userData = JSON.parse(localStorage.getItem("userData"));
    constructor(public navCtrl: NavController,public viewCtrl : ViewController, public modalCtrl: ModalController, public platform : Platform, public _commonService: CommonService, public SharedService: SharedService) {


    }
    dismiss() {

        this.viewCtrl.dismiss()
    }

    save(){

        if(this.SharedService.validation(this.fat) || !this.fat){
            this.SharedService.alertFunction(CONSTANTS.EmptyFat);
            return
        }
        if(this.SharedService.validation(this.weight) || !this.weight){
            this.SharedService.alertFunction(CONSTANTS.EmptyWeight);
            return
        }
        
        var data ={
            userid :this.userData.user_id ,fat:this.fat,weight:this.weight,month:'jan'
        }
        // 
       this._commonService.httpPostMethodCall('fatentry', data).subscribe(
        response => {
            if(response){
                this.SharedService.alertFunction(CONSTANTS.succesUpdation);
                this.viewCtrl.dismiss()
            }
            
        },
        error => {
            this.SharedService.errorHandling(error);
        });
    }

    
}

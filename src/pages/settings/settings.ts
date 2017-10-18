/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import { CONSTANTS } from '../services/config.service';
import * as _ from 'lodash';
@Component({
    selector: 'settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {
    locationData = [];
    constructor(public navCtrl: NavController, public _commonservice: CommonService, public _sharedService: SharedService, public alertCtrl: AlertController) {

        

    }

    logout(){

        this._sharedService.confirmation('Logout','Do you want to logout?',this.success)
    }

    changeLanguage(){
        //hange your current language
        this._commonservice.httpGetMethodCall('locations').subscribe(
            response => {
                var data ={};
                let alert = this.alertCtrl.create();
                if(response){
                    //create new inputs 
                     _.forEach(response, function (value) {
                        data = {
                            type: 'radio',
                            label: value.location_name,
                            value: value.location_id,
                            checked: false
                        }
                        
                        alert.setTitle('Choose your location');
                        alert.addInput(data);
                    });
                    
                   this.addRadioButton(alert);
                }
            },
            error => {
                this._sharedService.errorHandling(error);
            });
    }

    addRadioButton(alert){
        
            alert.addButton('Cancel');
            alert.addButton({
            text: 'OK',
            handler: data => {

                console.log(data);
                // this.testRadioOpen = false;
                // this.testRadioResult = data;
            }
            });
            alert.present();
    }
    

    success(){
            console.log("test")
    }

}
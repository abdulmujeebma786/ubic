/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { SharedService } from '../services/shared.service';

// import { HomePage } from '../../pages/home/home';

@Component({
    selector: 'settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {

    constructor(public navCtrl: NavController, private _sharedService: SharedService) {

        

    }

    logout(){
        // localStorage.setItem('userData','');


        this._sharedService.confirmation('Logout','Do you want to logout?',this.success)
    }

    success(){
            console.log("test")
    }

}
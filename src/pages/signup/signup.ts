/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { GoalPage } from '../../pages/goal/goal';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';

import { CONSTANTS } from '../services/config.service';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})
export class SignupPage {
    signup = {
        name: '',
        email: '',
        pass: '',
        location: ''
    }
    locations :any;
    constructor(public navCtrl: NavController, public shared: SharedService, public _commonservice: CommonService) {
        this.getLocation();
    }

    getLocation() {

        this._commonservice.httpGetMethodCall('locations').subscribe(
            response => {
                this.locations = response;
            },
            error => {
                this.shared.errorHandling(error);
            });
    }

    submitSignup(data) {
        if (this.shared.validation(data.name)) {
            this.shared.alertFunction(CONSTANTS.ValidName);
            return
        }
        if (this.shared.validation(data.email)) {
            this.shared.alertFunction(CONSTANTS.validEmail);
            return
        }
        if (this.shared.validation(data.pass)) {
            this.shared.alertFunction(CONSTANTS.EmptyPassword);
            return
        }
        if (this.shared.validation(data.location)) {
            this.shared.alertFunction(CONSTANTS.selectLocation);
            return
        }

        this._commonservice.httpPostMethodCall('userRegistration', data).subscribe(
            response => {
                if (response.status == 1) {
                    this.navCtrl.push(GoalPage);
                    localStorage.setItem("userData", JSON.stringify(response.data));
                }
                else if (response.status == 2) {
                    this.shared.alertFunction(CONSTANTS.EmailExist);
                }
            },
            error => {
                this.shared.errorHandling(error);
            });

    }

    goToLogin() {
        this.navCtrl.push(LoginPage);
    }
}

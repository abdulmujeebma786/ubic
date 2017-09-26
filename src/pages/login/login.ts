/**
 * Created by ubic on 18/04/17.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { forgetPasswordPage } from '../forgetpassword/forgetpassword';
import { GoalPage } from '../goal/goal';

import { CONSTANTS } from '../services/config.service';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    data ={email:'',password:''}
    constructor(public navCtrl: NavController, public SharedService: SharedService, public _commonservice : CommonService)  {
        
    }

    OpenSignup(){
        this.navCtrl.push(SignupPage);
    }

    OpenForetPass(){
        this.navCtrl.push(forgetPasswordPage);
    }

    Login(data) {
        
        if(this.SharedService.validation(data.email)){
            this.SharedService.alertFunction(CONSTANTS.EmptyUsername);
            return
        }
        if(this.SharedService.validation(data.password)){
            this.SharedService.alertFunction(CONSTANTS.EmptyPassword);
            return
        }
            this._commonservice.httpPostMethodCall('userlogin',data). subscribe(
			response => {
				if(response.status){
                    localStorage.setItem("userData",JSON.stringify(response.data));
                    if(response.bodyStatus == false){
                        this.navCtrl.push(GoalPage);
                    }else {
                        localStorage.setItem("Calory_Diet",'set');
                        this.navCtrl.push(HomePage);
                    }
                }else{
                    this.SharedService.alertFunction(CONSTANTS.InvalidCredentials);
                }
			},
	      	error => {
				this.SharedService.errorHandling(error);
			});

       
    }

}

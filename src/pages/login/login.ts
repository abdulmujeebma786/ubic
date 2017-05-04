/**
 * Created by ubic on 18/04/17.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { forgetPasswordPage } from '../forgetpassword/forgetpassword';
import { GoalPage } from '../goal/goal';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    data ={uname:'',paswd:''}
    constructor(public navCtrl: NavController) {

    }

    OpenSignup(){
        this.navCtrl.push(SignupPage);
    }

    OpenForetPass(){
        this.navCtrl.push(forgetPasswordPage);
    }

    Login(data) {
        console.log(this.data)

        this.navCtrl.push(GoalPage);
    }

}

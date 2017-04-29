/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})
export class SignupPage {

    constructor(public navCtrl: NavController) {

    }

    goToLogin(){
        this.navCtrl.push(LoginPage);
    }
}

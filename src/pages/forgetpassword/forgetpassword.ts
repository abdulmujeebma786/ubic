/**
 * Created by ubic on 19/04/17.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

@Component({
    selector: 'page-forgetpassword',
    templateUrl: 'forgetpassword.html'
})
export class forgetPasswordPage {


    constructor(public navCtrl: NavController) {

    }

    goToLogin(){
        this.navCtrl.push(LoginPage);
    }
}

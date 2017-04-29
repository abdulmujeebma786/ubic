/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
    selector: 'page-landing',
    templateUrl: 'landing.html'
})
export class LandingPage {

    slides: Array<{id: number, img: any}>;
    constructor(public navCtrl: NavController) {
    this.slides = [
        {id:1,img:'../../assets/img/land1.jpg'},
        {id:2,img:'../../assets/img/land2.jpg'},
        {id:3,img:'../../assets/img/land3.jpg'},
        {id:4,img:'../../assets/img/land4.jpg'}
        ]
    }

//    LOGIN PAGE REDIRECTION
    goToLogin(){
        this.navCtrl.push(LoginPage);
    }

    goToSignup(){
        this.navCtrl.push(SignupPage);
    }


}

/**
 * Created by ubic on 23/04/17.
 */
import { Component } from '@angular/core';
import { ModalController, NavController, Platform, ViewController, NavParams } from 'ionic-angular';
import { FoodListPage } from '../../pages/foodlist/foodlist';
@Component({
    selector: 'analysis',
    templateUrl: 'analysis.html'
})
export class AnalysisPage {
    
  
    constructor(public navCtrl: NavController,public viewCtrl : ViewController, public navParams: NavParams) {

        
    
    }
   
    
}

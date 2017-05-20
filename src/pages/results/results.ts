/**
 * Created by ubic on 15/04/17.
 */
import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
    selector: 'results',
    templateUrl: 'results.html'
})
export class Results {
    Bmi:any; BmiStatus:any;  calorieExpendeture:any; calorieDiet:any; resultStatus:any;  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
            // {bmi: $scope.BMI ,bmiStatus: $scope.BmiStatus,calorieexpendetur: $scope.Calery_Expendeture, caloriediet : $scope.Calory_Dietperday,resultStatus: $scope.resultmessage}
        this.Bmi = this.navParams.get('bmi');
        this.BmiStatus = this.navParams.get('bmiStatus');
        this.calorieExpendeture = this.navParams.get('calorieexpendetur');
        this.calorieDiet = this.navParams.get('caloriediet');
        this.resultStatus = this.navParams.get('resultStatus');
    }

    nextPage(){
        this.navCtrl.push(HomePage);
        // this.nav.setRoot(HomePage);
    }
}
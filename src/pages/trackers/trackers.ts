/**
 * Created by ubic on 15/04/17.
 */
import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { newTrack } from './newtrack/newTrack';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import { CONSTANTS } from '../services/config.service';

@Component({
    selector: 'trackers',
    templateUrl: 'trackers.html'
})
export class TrackersPage {

    @ViewChild('lineCanvas') lineCanvas;
    userData = JSON.parse(localStorage.getItem("userData"));
    lineChart: any;
    trackdata:'';
 
    constructor(public navCtrl: NavController, public modalCtrl : ModalController, public _commonService: CommonService, public SharedService: SharedService ) {
 
    }
 
    ionViewDidLoad() {
        
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }
 
        });
 
    }

    addtrack(){
        let modal = this.modalCtrl.create(newTrack);
        modal.present();
    }

    ngOnInit(){
        // getTrackers
        
        this._commonService.httpPostMethodCall('getTrackers', {userid :this.userData.user_id}).subscribe(
        response => {
            if(response){
                // this.SharedService.alertFunction(CONSTANTS.succesUpdation);
                
            }
            
        },
        error => {
            this.SharedService.errorHandling(error);
        });
    }
 
 
}

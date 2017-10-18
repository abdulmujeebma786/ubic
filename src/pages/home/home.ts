import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import { homeData } from './homedata';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   progress = 70;
   homeData = new homeData();
   specialData:any;
  constructor(public navCtrl: NavController, public _commonService: CommonService, public SharedService: SharedService) {
    this.initialization()
  }

    eventSource;
    viewTitle;
    isToday: boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date()
    }; // these are the variable used by the calendar.
    loadEvents() {
        this.eventSource = this.createRandomEvents();
        console.log(this.eventSource )
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onEventSelected(event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    }
    changeMode(mode) {
        this.calendar.mode = mode;
    }
    today() {
        this.calendar.currentDate = new Date();
    }
    onTimeSelected(ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    }
    onCurrentDateChanged(event:Date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    }
    createRandomEvents() {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        console.log(events);
        
        return events;
    }
    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }

    initialization(){
        
    }
    markDisabled = (date:Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    };  
    ngOnInit(){

        var userData = JSON.parse(localStorage.getItem("userData"));
        // userData.user_id = 6;
        this._commonService.httpPostMethodCall('getHomedata', { 'userid': userData.user_id }).subscribe(
        response => {
            console.log(response);

            this.homeData = response.data;
            this.specialData = response.specialData;
            localStorage.setItem("Calory_Diet",this.homeData.body_calory_diet);
            if (response.status) {

            }
        },
        error => {
            this.SharedService.errorHandling(error);
        });
        // var data = {
        //     user_id: 4,
        //     orientation: 1,
        //     location: 1,
        //     meal: 4,
        //     sub_meal: 1,
        //     calorie0: 10,
        //     calorie1: 1000000
        //     }

        //     this._commonService.httpPostMethodAdmin('user_foods', data).subscribe(
        //     response => {
        //         console.log(data)
        //     },
        //     error => {
        //         this.SharedService.errorHandling(error);
        //     });
    }
}

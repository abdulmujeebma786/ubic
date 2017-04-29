import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProgrameOverviewPage } from '../../pages/programe_overview/programe_overview';
import { SpecialEventPage } from '../../pages/special_event/special_event';
@Component({
  selector: 'coach',
  templateUrl: 'coach.html'
})
export class CoachPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('item');
  }

  regularDiet(){
    this.navCtrl.push(ProgrameOverviewPage);
  }
  specialEvent(){
    this.navCtrl.push(SpecialEventPage);
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });
  }
}

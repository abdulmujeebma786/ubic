/**
 * Created by ubic on 23/04/17.
 */
import { Component, ViewChild } from '@angular/core';
import { ModalController, NavController, Platform, ViewController } from 'ionic-angular';
import { PlannerListPage } from '../../pages/plannerlist/plannerlist';
import { IScrollTab, ScrollTabsComponentModule, ScrollTabsComponent } from '../../pages/components/scrolltabs';

@Component({
    selector: 'foodlist',
    templateUrl: 'foodlist.html'
})
export class FoodListPage {
    
    
        tabs: IScrollTab[] = [
                {
                name: 'Wallet & Bags'
                },
                {
                name: 'Western wear'
                },
                {
                name: 'Jewellery'
                },
                {
                name: 'Accessories'
                },
                {
                name: 'Cosplay'
                },
            ];
  selectedTab: IScrollTab;
  @ViewChild('scrollTab') scrollTab: ScrollTabsComponent;
  
  constructor(public navCtrl: NavController,public viewCtrl : ViewController) {

    }
ionViewDidEnter() {
    this.scrollTab.go2Tab(0);
  }

  tabChange(data: any) {
    this.selectedTab = data.selectedTab;
  }
   
}

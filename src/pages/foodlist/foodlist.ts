/**
 * Created by ubic on 23/04/17.
 */
import { Component, ViewChild } from '@angular/core';
import { ModalController, NavController, Platform, ViewController } from 'ionic-angular';
import { PlannerListPage } from '../../pages/plannerlist/plannerlist';
import { IScrollTab, ScrollTabsComponentModule, ScrollTabsComponent } from '../../pages/components/scrolltabs';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import { CONSTANTS } from '../services/config.service';

@Component({
    selector: 'foodlist',
    templateUrl: 'foodlist.html'
})
export class FoodListPage {
    
        emptyImagepath:any =  CONSTANTS.emptyImagepath
        selectedList = [];
    
        tabs: IScrollTab[] = [
                {
                type_name:"Paratha",
                item: [
                    {
                      "name": "Onion Paratha ",
                      "img": null,
                      "status":false,
                      "types": [
                        {
                          "calorie": "296.045",
                          "serving_size": "Small Dish",
                          "quantity": 1,
                          "image": null
                        },
                        {
                          "calorie": "1184.18",
                          "serving_size": "Medium Dish",
                          "quantity": 1,
                          "image": null
                        },
                        {
                          "calorie": "592.09",
                          "serving_size": "Regular Dish",
                          "quantity": 1,
                          "image": null
                        }
                      ]
                    }]
                  },
                  {
                type_name:"Paratha",
                item: [
                    {
                      "name": "Onion klsajkvhcgj ",
                      "img": null,
                      "status":false,
                      "types": [
                        {
                          "calorie": "296.045",
                          "serving_size": "Small Dish",
                          "quantity": 1,
                          "image": null
                        },
                        {
                          "calorie": "1184.18",
                          "serving_size": "Medium Dish",
                          "quantity": 1,
                          "image": null
                        },
                        {
                          "calorie": "592.09",
                          "serving_size": "Regular Dish",
                          "quantity": 1,
                          "image": null
                        }
                      ]
                    }]
                  }

            ];
  selectedTab: IScrollTab;
  @ViewChild('scrollTab') scrollTab: ScrollTabsComponent;
  
  constructor(public navCtrl: NavController,public viewCtrl : ViewController) {

    }
  ionViewDidEnter() {
    this.scrollTab.go2Tab(0);
  }

  tabChange(data: any) {
    console.log(data);
    this.selectedTab = data.selectedTab;
    this.selectedList = this.selectedTab.item;


  }

  toggleDiv(index){
    if(this.selectedList[index].status)
    {
      this.selectedList[index].status = false;
    }else{
      this.selectedList[index].status=true;
    }
  }
  back(){
    
  }
   
}

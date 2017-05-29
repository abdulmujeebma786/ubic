/**
 * Created by ubic on 23/04/17.
 */
import { Component } from '@angular/core';
import { ModalController, NavController, Platform, ViewController } from 'ionic-angular';
import { FoodListPage } from '../../pages/foodlist/foodlist';
@Component({
    selector: 'plannerlist',
    templateUrl: 'plannerlist.html'
})
export class PlannerListPage {
    
    plannerData = [];
     data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];


    constructor(public navCtrl: NavController,public viewCtrl : ViewController) {

        var data = [{'sub_meal_name':'Main course','sub_meal_id':1,'selected':""},
                                    {'sub_meal_name':'SideDish','sub_meal_id':2,'selected':""}]
        
        var snacks = [{'title':'Beverages','sub_meal_id':3,'selected':""},
                                    {'title':'Salads','sub_meal_id':7,'selected':""},{'title':'Fruits','sub_meal_id':6,'selected':""},{'title':'Soups','sub_meal_id':4,'selected':""},{'title':'Sandwiches','sub_meal_id':5,'selected':""}]



        for(let i = 0; i < 10; i++ ){
      this.data.push({
          title: 'Title '+i,
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          icon: 'ios-add-circle-outline',
          showDetails: false
        });
    
    }}
    toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
    } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
    }

    
  }
    foodList() {
        this.navCtrl.push(FoodListPage);
    }
    
}

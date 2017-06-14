/**
 * Created by ubic on 23/04/17.
 */
import { Component } from '@angular/core';
import { ModalController, NavController, Platform, ViewController, NavParams } from 'ionic-angular';
import { FoodListPage } from '../../pages/foodlist/foodlist';
@Component({
    selector: 'plannerlist',
    templateUrl: 'plannerlist.html'
})
export class PlannerListPage {
    
    //  data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];
    activeTab = 0;
    progress = 70;
    calorieInMeal = 20
     plannerData = JSON.parse(localStorage.getItem("planner"));
     index: any; length:any;
     data:any;
     mealName :any;
    constructor(public navCtrl: NavController,public viewCtrl : ViewController, public navParams: NavParams) {

        this.index = navParams.get('index');
        this.length = navParams.get('length');
        this.mealName = this.plannerData[this.index].meal_name;
        
        if(this.plannerData[this.index].type !== 'snack'){
            this.data = [{'sub_meal_name':'Main course','sub_meal_id':1,'selected':[]},
                                    {'sub_meal_name':'SideDish1','sub_meal_id':2,'selected':[]},{'sub_meal_name':'SideDish2','sub_meal_id':2,'selected':[]},{'sub_meal_name':'SideDish3','sub_meal_id':2,'selected':[]}]
        }else {
            this.data = [{'sub_meal_name':'Beverages','sub_meal_id':3,'selected':[]},
                                    {'sub_meal_name':'Salads','sub_meal_id':7,'selected':[]},{'sub_meal_name':'Fruits','sub_meal_id':6,'selected':[]},{'sub_meal_name':'Soups','sub_meal_id':4,'selected':[]},{'sub_meal_name':'Sandwiches','sub_meal_id':5,'selected':[]}]
        }   
    
    }

    tabActive(status){
        this.activeTab = status;
    }
    toggleDetails(data) {
    

    
  }
    goTofoodList(data) {
        console.log(data);
        this.navCtrl.push(FoodListPage);
    }
    
}

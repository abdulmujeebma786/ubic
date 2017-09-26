/**
 * Created by ubic on 23/04/17.
 */
import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { FoodListPage } from '../../pages/foodlist/foodlist';
import { SharedService } from '../services/shared.service';
import * as _ from 'lodash';

@Component({
    selector: 'plannerlist',
    templateUrl: 'plannerlist.html'
})
export class PlannerListPage {


    activeTab = 0;
    calorieProgress = 0;
    calorieInMeal = 0
    plannerData = JSON.parse(localStorage.getItem("planner"));
    index: any; length: any;
    data: any;
    mealName: any;
    plannerDatas: any;
    index2: any;
    calorieDiet: number;
    calorieAdded = 0;
    calorieLeft = 0;
    selectedArray = JSON.parse(localStorage.getItem("selectedArray"));
    plannerId: any;
    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public sharedService: SharedService) {

        this.index = navParams.get('index');
        this.calorieDiet = navParams.get("calorieDiet");
        this.mealName = this.plannerData[this.index].meal_name;
        this.plannerId = this.plannerData[this.index].id;
        if (this.plannerData[this.index].type !== 'snack') {
            this.data = [{ 'sub_meal_name': 'Main course', 'sub_meal_id': 1, 'type': 'main' },
            { 'sub_meal_name': 'SideDish1', 'sub_meal_id': 2, 'type': 'side' }, { 'sub_meal_name': 'SideDish2', 'sub_meal_id': 8 }, { 'sub_meal_name': 'SideDish3', 'sub_meal_id': 9 }, { 'sub_meal_name': 'Beverages', 'sub_meal_id': 3 },
            { 'sub_meal_name': 'Salads', 'sub_meal_id': 7, 'type': 'snack' }, { 'sub_meal_name': 'Fruits', 'sub_meal_id': 6, 'type': 'snack' }, { 'sub_meal_name': 'Soups', 'sub_meal_id': 4, 'type': 'snack' }, { 'sub_meal_name': 'Sandwiches', 'sub_meal_id': 5, 'type': 'snack' }]
        } else {
            this.data = [{ 'sub_meal_name': 'Beverages', 'sub_meal_id': 3 },
            { 'sub_meal_name': 'Salads', 'sub_meal_id': 7 }, { 'sub_meal_name': 'Fruits', 'sub_meal_id': 6 }, { 'sub_meal_name': 'Soups', 'sub_meal_id': 4 }, { 'sub_meal_name': 'Sandwiches', 'sub_meal_id': 5 }]
        }
    }

    tabActive(status) {

        this.activeTab = status;

    }

    toggleDetails(data) {

    }

    goTofoodList(data) {
        var selectedData = this.plannerData[this.index]
        if (selectedData.type == 'main') {
            var dietPercentage = Math.round(selectedData.diet_Percentage_value * this.calorieDiet);
            var main1 = Math.round(dietPercentage * selectedData.maincource1_value);
            var main2 = Math.round(dietPercentage * selectedData.maincource2_value);
            var side1 = Math.round(dietPercentage * selectedData.sideDish1_value);
            var side2 = Math.round(dietPercentage * selectedData.sideDish2_value);
            var snack1 = Math.round(dietPercentage * 0.15);
            var snack2 = Math.round(dietPercentage)
            if (data.type == 'main') {
                this.navCtrl.push(FoodListPage, { plannerId: selectedData.id, subPlannerId: data.sub_meal_id, plan1: main1, plan2: main2, type: data.type, dietPercentage: dietPercentage, calorieInMeal:this.calorieInMeal  });
            } else if (data.type == 'side')
            { this.navCtrl.push(FoodListPage, { plannerId: selectedData.id, subPlannerId: data.sub_meal_id, plan1: side1, plan2: side2, type: data.type, dietPercentage: dietPercentage, calorieInMeal:this.calorieInMeal  }); }
            else {
                this.navCtrl.push(FoodListPage, { plannerId: selectedData.id, subPlannerId: data.sub_meal_id, plan1: snack1, plan2: snack2, type: data.type, dietPercentage: dietPercentage, calorieInMeal:this.calorieInMeal });
            }
        } else {
            var dietPercentage = Math.round(selectedData.diet_Percentage_value * this.calorieDiet);
            var snack1 = Math.round(dietPercentage * selectedData.snack1_value);
            var snack2 = Math.round(dietPercentage * selectedData.snack2_value);
            this.navCtrl.push(FoodListPage, { plannerId: selectedData.id, subPlannerId: data.sub_meal_id, plan1: snack1, plan2: snack2, type: data.type, dietPercentage: dietPercentage, calorieInMeal:this.calorieInMeal });

        }
    }

    initialCalculation() {
        var calorieAdded = 0;
        var selectedData = this.plannerData[this.index]
        _.forEach(this.selectedArray, function (value) {
            if (value.plannerid == selectedData.id) {
                calorieAdded = Math.round(calorieAdded + parseInt(value.calorie));
            }

        });
        this.calorieAdded = calorieAdded
        this.calorieLeft = (this.calorieDiet - this.calorieAdded);
        this.calorieProgress = Math.round((this.calorieAdded / this.calorieInMeal) * 100);
    }

    ionViewWillEnter(){
        this.selectedArray = JSON.parse(localStorage.getItem("selectedArray"));
        this.mealName = this.plannerData[this.index].meal_name;
        this.plannerId = this.plannerData[this.index].id;
        var selectedData = this.plannerData[this.index]
        if (selectedData.type == 'main') {
            this.calorieInMeal = Math.round(selectedData.diet_Percentage_value * this.calorieDiet);
        }
        else {
            this.calorieInMeal = Math.round(selectedData.diet_Percentage_value * this.calorieDiet);
        }
        if (this.selectedArray) {
            this.initialCalculation();
        }

    }


    ngOnInit() {
        

    }
}

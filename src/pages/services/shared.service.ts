import {Injectable} from '@angular/core';
import { ActionSheetController, AlertController } from 'ionic-angular';
import { CommonService } from './common.service';

export var ticketData: any;


@Injectable()

export class SharedService {
	// @ViewChild(Nav) nav: Nav;
	public alertFailure: any;
    data :any;
	rootPage: any;

    plannerData = JSON.parse(localStorage.getItem("planner"));

	constructor(public _commonservice  :CommonService, public _actionSheetCtrl: ActionSheetController, public _alertCtrl:AlertController)  {}

	public alertFunction(subtitle){
        this.alertFailure = this._alertCtrl.create({
            subTitle: subtitle,
            buttons:[
                {text:'Ok', handler:(data)=>{
                    this.alertFailure = null;
                }}
            ]
        });
        this.alertFailure.present();
	}

    public confirmation(title,description, success){

        let alert = this._alertCtrl.create({
        title: title,
        message: description,
        buttons: [{
          text: "OK",
          handler: () => { 
            return success;
           }
        }, {
          text: "Cancel",
          role: 'cancel'
        }]
      })
      alert.present();


    }

    public errorHandling(error) {
		console.log(error);
  	}

    public validation(data){
        if(data == ''){
            return true;
        }else{
            return false;
        }
    }

    public SetplannerData(orientation) {

        switch(orientation){
                        case '4':
                            this.data = [
                            {
                                    'id':1,'meal_name':'Breakefast',type:'main',diet_Percentage_value:0.40,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            },{
                                'id':4,'meal_name':'Lunch',type:'main',diet_Percentage_value:0.3,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            },{
                                'id':5,'meal_name':'Snack',type:'snack',diet_Percentage_value:0.15,snack1_value:0.1,snack2_value:1,'selected':[]
                            },{
                                'id':6,'meal_name':'Dinner',type:'main',diet_Percentage_value:0.3,maincource1_value:0.7,maincource2_value:0.5,sideDish1_value:0.7,sideDish2_value:0.7,'selected':[]
                            }]
                            break;
                        case '5':

                            this.data = [{
                                'id':1,'meal_name':'Breakefast',type:'main',diet_Percentage_value:0.35,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            },{
                                'id':3,'meal_name':'Snack',type:'snack',diet_Percentage_value:0.1,snack1_value:0.1,snack2_value:1,'selected':[]
                            },{
                                'id':4,'meal_name':'Lunch',type:'main',diet_Percentage_value:0.25,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            },{
                                'id':5,'meal_name':'Snack',type:'snack',diet_Percentage_value:0.1,snack1_value:0.1,snack2_value:1,'selected':[]
                            },{
                                'id':6,'meal_name':'Dinner',type:'main',diet_Percentage_value:0.20,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            }]
                            break;
                        case '6':
                            this.data = [{
                                'id':2,'meal_name':'Snack',type:'snack',diet_Percentage_value:0.05,snack1_value:0.1,snack2_value:1,'selected':[]
                            },{
                                'id':1,'meal_name':'Breakefast',type:'main',diet_Percentage_value:0.30,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            },{
                                'id':3,'meal_name':'Snack',type:'snack',diet_Percentage_value:0.1,snack1_value:0.1,snack2_value:1,'selected':[]
                            },{
                                'id':4,'meal_name':'Lunch',type:'main',diet_Percentage_value:0.25,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            },{
                                'id':5,'meal_name':'Snack',type:'snack',diet_Percentage_value:0.1,snack1_value:0.1,snack2_value:1,'selected':[]
                            },{
                                'id':6,'meal_name':'Dinner',type:'main',diet_Percentage_value:0.20,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            }]
                            break;

                    }
                    localStorage.setItem('meal',orientation);
                    localStorage.setItem("planner",JSON.stringify(this.data));
                    var array =[];
                    localStorage.setItem("selectedArray",JSON.stringify(array));
    }

    public physicalLevelCalculation (value,gender){
        var level = 0;
        var calDeficit = 0;
        if(gender == 'male'){
            switch(value){
                case 1 : level = 1.2; calDeficit = 300;
                    break;

                case 2 : level = 1.375; calDeficit = 300;
                    break;
                
                case 3 : level = 1.55; calDeficit = 400;
                    break;

                case 4 : level = 1.725; calDeficit = 400;
                    break;

                case 5 : level = 1.9; calDeficit = 500;
                    break;
            }
        }else {
            switch(value){
                case 1 : level = 1; calDeficit = 300;
                    break;

                case 2 : level = 1.1; calDeficit = 300;
                    break;
                
                case 3 : level = 1.2; calDeficit = 400;
                    break;

                case 4 : level = 1.375; calDeficit = 400;
                    break;

                case 5 : level = 1.45; calDeficit = 500;
                    break;
            }
        }

        return {level : level, calDeficit : calDeficit}
    }

    public checkArray(data,index){
        
        //  _.forEach(JSON.parse(localStorage.getItem("planner"))[index].selected,
        //      function(value,index) {
        //         if(value.sub_meal_id == data.sub_meal_id ){
                    
        //             this.plannerData[index].selected.push(data);
        //             localStorage.setItem("planner",JSON.stringify(this.plannerData));
        //             return index;
        //         }
                
        //      }
        // );
    }

}


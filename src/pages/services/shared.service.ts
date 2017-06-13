import {Injectable, ViewChild} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable }    from 'rxjs/Observable';
import { Http, Headers, URLSearchParams, RequestOptions } from "@angular/http";
import { ActionSheetController, AlertController, Nav } from 'ionic-angular';

import { CommonService } from './common.service';


export var ticketData: any;


@Injectable()

export class SharedService {
	// @ViewChild(Nav) nav: Nav;
	public alertFailure: any;
    data :any;
	rootPage: any;

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
                                'id':5,'meal_name':'Evening Snack',type:'snack',diet_Percentage_value:0.15,snack1_value:0.1,snack2_value:1,'selected':[]
                            },{
                                'id':6,'meal_name':'Dinner',type:'main',diet_Percentage_value:0.3,maincource1_value:0.7,maincource2_value:0.5,sideDish1_value:0.7,sideDish2_value:0.7,'selected':[]
                            }]
                            break;
                        case '5':

                            this.data = [{
                                'id':1,'meal_name':'Breakefast',type:'main',diet_Percentage_value:0.35,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            },{
                                'id':3,'meal_name':'Mid Morning Snack',type:'snack',diet_Percentage_value:0.1,snack1_value:0.1,snack2_value:1,'selected':[]
                            },{
                                'id':4,'meal_name':'Lunch',type:'main',diet_Percentage_value:0.25,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            },{
                                'id':5,'meal_name':'Evening Snack',type:'snack',diet_Percentage_value:0.1,snack1_value:0.1,snack2_value:1,'selected':[]
                            },{
                                'id':6,'meal_name':'Dinner',type:'main',diet_Percentage_value:0.20,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            }]
                            break;
                        case '6':
                            this.data = [{
                                'id':2,'meal_name':'Early Morning Snack',type:'snack',diet_Percentage_value:0.05,snack1_value:0.1,snack2_value:1,'selected':[]
                            },{
                                'id':1,'meal_name':'Breakefast',type:'main',diet_Percentage_value:0.30,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            },{
                                'id':3,'meal_name':'Mid Morning Snack',type:'snack',diet_Percentage_value:0.1,snack1_value:0.1,snack2_value:1,'selected':[]
                            },{
                                'id':4,'meal_name':'Lunch',type:'main',diet_Percentage_value:0.25,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            },{
                                'id':5,'meal_name':'Evening Snack',type:'snack',diet_Percentage_value:0.1,snack1_value:0.1,snack2_value:1,'selected':[]
                            },{
                                'id':6,'meal_name':'Dinner',type:'main',diet_Percentage_value:0.20,maincource1_value:0.3,maincource2_value:0.7,sideDish1_value:0.05,sideDish2_value:0.7,'selected':[]
                            }]
                            break;

                    }
                    localStorage.setItem("planner",JSON.stringify(this.data));
    }


}


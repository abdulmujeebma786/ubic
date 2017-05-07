/**
 * Created by ubic on 23/04/17.
 */
import { Component } from '@angular/core';
import { ModalController, NavController, Platform, ViewController } from 'ionic-angular';
import { PlannerListPage } from '../../pages/plannerlist/plannerlist';
@Component({
    selector: 'planner',
    templateUrl: 'planner.html'
})
export class PlannerPage {
    
    plannerData = [];
    
    constructor(public navCtrl: NavController,public viewCtrl : ViewController) {

        this.plannerData = [{
                                'id':1,'title':'Breakefast',type:'main','name':'breakefast','selected':[{'title':'Main course','id':1,'selected':""},
                                    {'title':'SideDish','id':2,'selected':""}]
                            },{
                                'id':3,'title':'Snacks',type:'snack','name':'middlesnacks','selected':[{'title':'Beverages','id':3,'selected':""},
                                    {'title':'Salads','id':7,'selected':""},{'title':'Fruits','id':6,'selected':""},{'title':'Soups','id':4,'selected':""},{'title':'Sandwiches','id':5,'selected':""}]
                            },{
                                'id':4,'title':'Lunch',type:'main','name':'lunch','selected':[{'title':'Main course','id':1,'selected':""},
                                    {'title':'SideDish','id':2,'selected':""}]
                            },{
                                'id':5,'title':'snacks',type:'snack','name':'eveningsnack','selected':[{'title':'Beverages','id':3,'selected':""},
                                    {'title':'Salads','id':7,'selected':""},{'title':'Fruits','id':6,'selected':""},{'title':'Soups','id':4,'selected':""},{'title':'Sandwiches','id':5,'selected':""}]
                            },{
                                'id':6,'title':'Dinner',type:'main','name':'dinner','selected':[{'title':'Main course','id':1,'selected':""},
                                    {'title':'SideDish','id':2,'selected':""}]
                            }];
    }

    goToPlannerList(){
        this.navCtrl.push(PlannerListPage);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}

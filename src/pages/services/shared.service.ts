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

	rootPage: any;

	constructor(public _commonservice  :CommonService, public _actionSheetCtrl: ActionSheetController, public _alertCtrl:AlertController)  {}

	public alertFunction(subtitle){
        this.alertFailure = this._alertCtrl.create({
            title: '<img src="assets/img/logo.png"',
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


}


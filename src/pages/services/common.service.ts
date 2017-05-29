import {Injectable} from '@angular/core';
/*import { Http, Response, Headers ,URLSearchParams} from '@angular/http';*/
import { Http, Headers, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
/*import { HttpObject } from 'http.object';
*/
import { BASE_URL, ADMIN_URL } from './config.service';
import { LoadingController, Platform } from 'ionic-angular';
import { SharedService } from './shared.service';





@Injectable()
export class CommonService {
	private access_token:string;
  	public loadingPopup: any;
	public actionSheet: any;
	rootPage: any;

	constructor(public http: Http, public _loadingCtrl:LoadingController, public platform: Platform){}
	
	httpGetMethodCall (url:string, objParam:Object = {}){
		url = BASE_URL + url;
		
		const headers = new Headers();
		

		return this.http.get(url,{
	      headers: headers
		})
        //.map(res => res.json())
        .map((data: Response) => {
        	if(data.status == 200){
        		return data.json() 
        	}
		})
        .catch(this.errorHandle);
   	}

   	httpPutMethodCall (url:string, data:Object){
		this.access_token = localStorage.getItem('access_token');
		const headers = new Headers();
		url = BASE_URL + url;

		if (this.access_token){
			headers.append('Authorization', 'Bearer '+this.access_token);
			headers.append('Content-Type', 'application/json');
		}

    	return this.http.put(url, data, {
	      headers: headers
	    })
		
		//.map(res => res.json())
		.map((data: Response) => {
			if(data.status == 200){
        		return data.json() 
        	}
		})
		.catch(this.errorHandle);
   	}

	httpGetMethodCallOData(url: string){
		this.showLoader()
		url = ADMIN_URL + url;
		const headers = new Headers();
		

		return this.http.get(url,{
	      	headers: new Headers({'Content-Type':'application/x-www-form-urlencoded'})
		})
        //.map(res => res.json())
        .map((data: Response) => {
			if(data.status == 200){
				this.loadingPopup.dismiss();
        		return data.json() 
        	}
		})
        .catch(this.errorHandle);
   	}

	httpPostMethodCall(url: string, data:Object ){
		this.showLoader()
		// this.access_token = localStorage.getItem('access_token');
		// const headers = new Headers();
		url = BASE_URL + url;
		// headers.append('Content-Type', 'application/json');
		

    	return this.http.post(url, data, {
	      headers: new Headers({'Content-Type':'application/x-www-form-urlencoded'})
	    })

		//.map(res => res.json())
		.map((data: Response) => {
			if(data.status == 200){
				this.loadingPopup.dismiss();
        		return data.json() 
				
        	}
		})
		.catch(this.errorHandle);
	}

   	private errorHandle(error) {
		   this.loadingPopup.dismiss();
		//    this.SharedService.alertFunction(error);
		return Observable.throw(error || 'Server error');
  	}

	public showLoader() {

	    this.loadingPopup = this._loadingCtrl.create({
	      content: 'Loading...'
	    });
	    this.loadingPopup.present();
	    return this.loadingPopup;
  	}
	

}
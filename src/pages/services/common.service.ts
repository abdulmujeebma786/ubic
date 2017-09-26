import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { BASE_URL, ADMIN_URL } from './config.service';
import { LoadingController, Platform } from 'ionic-angular';
@Injectable()
export class CommonService {
	private access_token: string;
	public loadingPopup: any;
	public actionSheet: any;
	rootPage: any;

	constructor(public http: Http, public _loadingCtrl: LoadingController, public platform: Platform, private toastCtrl: ToastController) { }

	httpGetMethodCall(url: string, objParam: Object = {}) {

		this.showLoader()
		url = ADMIN_URL + url;

		const headers = new Headers();
		return this.http.get(url, {
			headers: headers
		})
			.map((data: Response) => {
				if (data.status == 200) {
					this.loadingPopup.dismiss();
					return data.json()
				}
				
			})
			.catch(this.errorHandle);
	}

	httpPutMethodCall(url: string, data: Object) {
		// this.access_token = localStorage.getItem('access_token');
		const headers = new Headers();
		url = BASE_URL + url;

		if (this.access_token) {
			// headers.append('Authorization', 'Bearer ' + this.access_token);
			headers.append('Content-Type', 'application/json');
		}

		return this.http.put(url, data, {
			headers: headers
		})
			.map((data: Response) => {
				if (data.status == 200) {
					return data.json()
				}
			})
			.catch(this.errorHandle);
	}

	httpGetMethodCallOData(url: string) {
		this.showLoader()
		url = ADMIN_URL + url;
		// const headers = new Headers();


		return this.http.get(url, {
			headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
		})

			.map((data: Response) => {
				if (data.status == 200) {
					this.loadingPopup.dismiss();
					return data.json()
				}
			})
			.catch(this.errorHandle);
	}

	httpPostMethodCall(url: string, data: Object) {
		this.showLoader()
		// this.access_token = localStorage.getItem('access_token');
		const headers = new Headers();
		url = BASE_URL + url;
		// headers.append('Content-Type', 'application/json');
		headers.append('Content-Type' ,'application/x-www-form-urlencoded');

		const searchParams = Object.keys(data).map((key) => {
			return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
			}).join('&');
		return this.http.post(url, searchParams, {
			headers: headers
		})
			.map((datas: Response) => {
				if (datas.status == 200) {
					this.loadingPopup.dismiss();
					return datas.json()
				}
			})
			.catch(this.errorHandle);
	}

	/*
	@method call from admin portion
	*/
	httpPostMethodAdmin(url: string, data: Object) {
		this.showLoader()
		const headers = new Headers();
		headers.append('Content-Type' ,'application/x-www-form-urlencoded');
		// headers.append('Content-Type', 'application/json');
		// const searchData = data;
		const searchData = Object.keys(data).map((key) => {
			return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
		}).join('&');
		console.log(searchData)
		url = ADMIN_URL + url;
		return this.http.post(url, searchData, {
			headers: headers
		})
		.map((data: Response) => {
			if (data.status == 200) {
				this.loadingPopup.dismiss();
				return data.json()

			}
			else {
				this.errorHandle;
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

	public showToast(message, alignment) {
		let toast = this.toastCtrl.create({
			message: message,
			duration: 3000,
			position: alignment
		});

		toast.present();
	}


}
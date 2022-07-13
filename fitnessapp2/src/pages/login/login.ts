import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {
		id: '',
		password: ''
	}

  constructor(private navCtrl: NavController,
		private authService: AuthService,
		private toastService: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  homePage(){
    this.navCtrl.setRoot(TabsPage);
  }

  registerPage(){
    this.navCtrl.push(SignupPage);
  }

  login() {
	
		this.authService.login(this.user).subscribe((response) => {
			let resp = response.json();
			this.toastService.toggleToast('Login Successful');
			if (this.authService.initSession(resp.token, resp.user)) {
				this.navCtrl.setRoot(TabsPage);
			}
		}, (err) => {
			this.toastService.showToast(err);
			this.authService.destroySession();
		});
	}

}

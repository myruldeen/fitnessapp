import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public authService: AuthService,public toastService: ToastService) {

  }

  logout() {
		if (this.authService.logout()) {
			this.navCtrl.setRoot(LoginPage);
			this.toastService.toggleToast('Logout Successful');
		} else {
			this.toastService.toggleToast('Logout Failed');
		}
	}

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {
    name: '',
    id: '',
    dob: '',
		email: '',
		password: ''
	}

  constructor(private authService: AuthService, 
              private toastService: ToastService,
              public navCtrl: NavController, 
              public navParams: NavParams,
              private loadingCtrl: LoadingController,
		          private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  login(){
    this.navCtrl.pop();
  }
  
  register() {
    const loading = this.loadingCtrl.create({
      content: 'login.......'
    });
    loading.present();
    this.authService.register(this.user).subscribe((response) => {
      let resp = response.json();
      if (resp) {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Register Successful!',
          message: 'Register successful, you now can login',
          buttons: [{
            text: 'OK',
            handler: () => {
              this.navCtrl.pop();
            }
          },]
        });
        alert.present();
      }
      
    }, (err) => {
      loading.dismiss();
      let messageError = JSON.parse(err._body);
      const alert = this.alertCtrl.create({
        title: 'Login failed!',
        message: messageError.message,
        buttons: ['OK']
      });
      alert.present();
      this.toastService.toggleToast('Register Failed!');
      console.error(err);
    });
  }

}

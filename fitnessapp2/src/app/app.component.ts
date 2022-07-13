import { Component } from '@angular/core';
import { Platform,NavController,  App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  rootPage:any = LoginPage;
  isAuthenticated: boolean = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, authService: AuthService,
    toastService: ToastService,protected app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // check for auth
      // subscribe to auth events
      authService.authEE.subscribe((authState) => {
        this.isAuthenticated = authState;
      });

      authService.isAuthenticated().subscribe((isAuth) => {
        console.info('User Auth State:', isAuth ? 'Logged In' : 'Logged Off');
        if (isAuth) {
          toastService.toggleToast('Login Successful!');
          let lastPage = this.navCtrl.last().instance;
          if (lastPage instanceof LoginPage) {
            this.rootPage = TabsPage;
          }
        }
      });

    });
  }

  get navCtrl(): NavController {
    return this.app.getRootNav();
  }
}

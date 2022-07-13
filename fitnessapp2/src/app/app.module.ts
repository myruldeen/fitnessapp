import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { BmicalculatorPage } from '../pages/bmicalculator/bmicalculator';
import { DetailPage } from '../pages/detail/detail';
import { ListPage } from '../pages/list/list';

import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { DataService } from '../services/data.service';

import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    BmicalculatorPage,
    ListPage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'mobile-app',
      storageType: 'localStorage'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    BmicalculatorPage,
    ListPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataService,
    AuthService,
    ToastService
  ]
})
export class AppModule { }

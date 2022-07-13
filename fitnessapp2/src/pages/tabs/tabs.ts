import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { BmicalculatorPage } from '../bmicalculator/bmicalculator';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  // tab2Root = AboutPage;
  // tab3Root = ContactPage;
  tab2Root = BmicalculatorPage;
  tab3Root = AboutPage;

  constructor() {

  }
}

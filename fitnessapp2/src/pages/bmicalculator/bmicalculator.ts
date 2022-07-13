import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BmicalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmicalculator',
  templateUrl: 'bmicalculator.html',
})
export class BmicalculatorPage {
  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      let finalBmi = this.weight / (this.height / 100 * this.height / 100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
  }
  
  // setBMIMessage will set the text message based on the value of BMI
  private setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = "Underweight"
    }
  
    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = "Normal"
    }
  
    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = "Overweight"
    }
  
    if (this.bmiValue > 30) {
      this.bmiMessage = "Obese"
    }
  }

}

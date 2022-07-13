import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  public data: any;
  public dataArray:any;
  public pageName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.data = this.navParams.get("data");
    this.dataArray = this.data.data;
    this.pageName = this.data.name;
    console.log(this.dataArray);
  }

  detailPage(d) {
    this.navCtrl.push(DetailPage, {
      data: d
    })
  }

}

import { Component } from '@angular/core';
import { InternalNgModuleRef } from '@angular/core/src/linker/ng_module_factory';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public data: any;
  public pageTitle: string;
  public img_url: string;
  public description: string;
  public steps: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataService) {
  }

  ionViewDidLoad() {
    this.data = this.navParams.get("data");
    this.pageTitle = this.data.title;
    this.img_url = this.data.image_url;
    this.description = this.data.description;
    // this.categories = this.data.categories;
    this.steps = this.data.steps;
  }

}

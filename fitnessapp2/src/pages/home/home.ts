import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { BmicalculatorPage } from '../bmicalculator/bmicalculator';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data;
  public categories: Array<any> = [];
  constructor(public navCtrl: NavController, private dataService: DataService) {

  }

  bmipage() {
    this.navCtrl.push(BmicalculatorPage);
  }

  listPage(data) {
    this.navCtrl.push(ListPage, {
      data: data
    });
  }

  showData(d) {
    console.log(d);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(
      data => { this.data = data.data},
      err => console.error(err),
      () => console.log('done loading data')
    )
  }

}

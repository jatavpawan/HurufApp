import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-Quran',
  templateUrl: 'Quran.html'
})
export class QuranPage {
    taboptionss: string;
  constructor(public navCtrl: NavController) {
      var self = this;
      self.taboptionss = "Quran";
  }

}

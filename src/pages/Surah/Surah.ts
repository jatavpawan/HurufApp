import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-Surah',
    templateUrl: 'Surah.html'
})
export class SurahPage {
    taboptionss: string;
    constructor(public navCtrl: NavController) {
        var self = this;
        self.taboptionss = "Surah";
    }

}

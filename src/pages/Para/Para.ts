import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-Para',
    templateUrl: 'Para.html'
})
export class ParaPage {
    taboptionss: string;
    constructor(public navCtrl: NavController) {
        var self = this;
        self.taboptionss = "Para";
    }

}

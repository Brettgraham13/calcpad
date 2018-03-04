import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html'
})
export class CalcPage {

  constructor(public navCtrl: NavController) {

  }


  screen = "";

  copyToDisplay = function(input: any) {
    this.screen = this.screen += input;
  }

  clearDisplay = function() {
    this.screen = "";
  }
}



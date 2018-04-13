import { Component, AfterViewInit, ViewChild,  ElementRef, ViewEncapsulation} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as MyScriptJS from 'myscript/dist/myscript.min.js';
// import * as PepJS from  'pepjs/dist/pep';
// import * as myScriptMath from '../../../bower_components/webcomponentsjs/webcomponents-lite';

@IonicPage()
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'page-my-script-canvas',
  templateUrl: 'my-script-canvas.html',
  styleUrls: ['my-script-canvas.scss']
})
export class MyScriptCanvasPage implements AfterViewInit {
  @ViewChild('editor') 
  editor: ElementRef;

  constructor(public navCtrl: NavController) {

  }
  ngAfterViewInit()  {
    // your code
    MyScriptJS.register(this.editor.nativeElement, {
      recognitionParams: {
        type: 'MATH',
        protocol: 'WEBSOCKET',
        apiVersion: 'V4',
        server: {
          scheme: 'https',
          host: 'webdemoapi.myscript.com',
          applicationKey: '7498d8dc-55db-4f40-8a80-625de7e17bed',
          hmacKey: '2ef4521b-5697-4653-8f8f-defede0bac55',
        },
      },
    });
  }
}

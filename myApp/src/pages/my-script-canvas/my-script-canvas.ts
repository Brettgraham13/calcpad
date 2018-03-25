// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the MyScriptCanvasPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-my-script-canvas',
//   templateUrl: 'my-script-canvas.html',
// })
// export class MyScriptCanvasPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad MyScriptCanvasPage');
//   }

// }

import { Component, AfterViewInit, ViewChild,  ElementRef, ViewEncapsulation} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as MyScriptJS from '/Users/ionatankuperwajs/Desktop/Macalester/Senior 2/Software/calcpad/myApp/bower_components/myscript/dist/myscript.min.js';
// import * as myscriptmathweb from '/Users/ionatankuperwajs/Desktop/Macalester/Senior 2/Software/calcpad/myApp/bower_components/myscript-math-web/';

@IonicPage()
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'page-my-script-canvas',
  templateUrl: 'my-script-canvas.html',
  // styleUrls: ['my-script-canvas.scss']
})
export class MyScriptCanvasPage implements AfterViewInit {
  @ViewChild("tref", {read: ElementRef}) domEditor: ElementRef;
  title = 'app';
  editor;
  ngAfterViewInit() : void {
    // your code
     console.log(this.domEditor.nativeElement);
     this.editor = MyScriptJS.register(this.domEditor.nativeElement, {
      recognitionParams: {
        type: 'TEXT',
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

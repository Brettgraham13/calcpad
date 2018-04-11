import { Component, AfterViewInit, ViewChild,  ElementRef, ViewEncapsulation} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as MyScriptJS from 'myscript/dist/myscript.min.js';
import * as PepJS from  'pepjs/dist/pep'

@IonicPage()
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'page-my-script-canvas',
  templateUrl: 'my-script-canvas.html'
  // styleUrl: 'my-script-canvas.scss',
})
export class MyScriptCanvasPage {
  // const editorElement = document.getElementById('editor');
  // const configuration = {
  //   recognitionParams: {
  //     type: 'TEXT',
  //     protocol: 'WEBSOCKET',
  //     apiVersion: 'V4',
  //     server: {
  //       scheme: 'https',
  //       host: 'webdemoapi.myscript.com',
  //       applicationKey: '7498d8dc-55db-4f40-8a80-625de7e17bed',
  //       hmacKey: '2ef4521b-5697-4653-8f8f-defede0bac55'
  //     }
  //   }
  // }
  // MyScript.register(editorElement,configuration);
};









    
//     this.editor = MyScriptJS.register(editorElement,configuration);

//     window.addEventListener('resize', function () {
//       editorElement.editor.resize();
//     });



//   @ViewChild("tref", {read: ElementRef}) domEditor: ElementRef;
//   title = 'app';
//   editor: any;
//   ngAfterViewInit() : void {
//     // your code
//      console.log(this.domEditor.nativeElement);
//      var editorElement = this.domEditor.nativeElement;
//      const configuration = {
//       recognitionParams: {
//         type: 'MATH',
//         protocol: 'WEBSOCKET',
//         apiVersion: 'V4',
//         server: {
//           scheme: 'https',
//           host: 'webdemoapi.myscript.com',
//           applicationKey: '7498d8dc-55db-4f40-8a80-625de7e17bed',
//           hmacKey: '2ef4521b-5697-4653-8f8f-defede0bac55',
//         },
//         v4: {
//           math: {
//             mimeTypes: ['application/x-latex']
//           }
//         }
//       }


  // }
// }

import { Component, AfterViewInit, ViewChild,  ElementRef, ViewEncapsulation} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as MyScriptJS from 'myscript/dist/myscript.min.js';
import * as PepJS from  'pepjs/dist/pep'

@IonicPage()
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'page-my-script-canvas',
  templateUrl: 'my-script-canvas.html'
  // styleUrls: ['my-script-canvas.scss']
})
export class MyScriptCanvasPage implements AfterViewInit {
  @ViewChild("tref", {read: ElementRef}) domEditor: ElementRef;
  title = 'app';
  editor: any;
  ngAfterViewInit() : void {
    // your code
     console.log(this.domEditor.nativeElement);
     var editorElement = this.domEditor.nativeElement;
     const configuration = {
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
        v4: {
          math: {
            mimeTypes: ['application/x-latex']
          }
        }
      }
    };

    
    this.editor = MyScriptJS.register(editorElement,configuration);

    window.addEventListener('resize', function () {
      editorElement.editor.resize();
    });

    // var editorElement: any = document.getElementById('editor');
    // var resultElement: any = document.getElementById('result');
    // var undoElement: any = document.getElementById('undo');
    // var redoElement: any = document.getElementById('redo');
    // var clearElement: any = document.getElementById('clear');
    // var convertElement: any = document.getElementById('convert');
    // var languageElement: any = document.getElementById('language');


    // editorElement.addEventListener('changed', function (event) {
    //   undoElement.disabled = !(<CustomEvent>event).detail.canUndo;
    //   redoElement.disabled = !(<CustomEvent>event).detail.canRedo;
    //   clearElement.disabled = (<CustomEvent>event).detail.isEmpty;
    // });
    
    // editorElement.addEventListener('exported', function (evt) {
    //   const exports = (<CustomEvent>evt).detail.exports;
    //   if (exports && exports['application/x-latex']) {
    //     convertElement.disabled = false;
    //     resultElement.innerHTML = '<span>' + exports['application/x-latex'] + '</span>';
    //   } else if (exports && exports['application/mathml+xml']) {
    //     convertElement.disabled = false;
    //     resultElement.innerText = exports['application/mathml+xml'];
    //   } else if (exports && exports['application/mathofficeXML']) {
    //     convertElement.disabled = false;
    //     resultElement.innerText = exports['application/mathofficeXML'];
    //   } else {
    //     convertElement.disabled = true;
    //     resultElement.innerHTML = '';
    //   }
    // });
    // undoElement.addEventListener('click', function () {
    //   editorElement.editor.undo();
    // });
    // redoElement.addEventListener('click', function () {
    //   editorElement.editor.redo();
    // });
    // clearElement.addEventListener('click', function () {
    //   editorElement.editor.clear();
    // });
    // convertElement.addEventListener('click', function () {
    //   editorElement.editor.convert();
    // });

    // editorElement.addEventListener('loaded', function (evt) {
    //   /**
    //    * Retrieve the list of available recognition languages
    //    * @param {Object} The editor recognition parameters
    //    */
    //   var currentLanguage = evt.target.editor.configuration.recognitionParams.v4.lang;
    //   var res = MyScriptJS.getAvailableLanguageList();
    //   Object.keys(res.result).forEach(function (key) {
    //     var selected = currentLanguage === key;
    //     languageElement.options[languageElement.options.length] = new Option(res.result[key], key, selected, selected);
    //   });
    //   languageElement.disabled = false;
    // });


    //  console.log(this.domEditor.nativeElement);

    //  this.editor = MyScriptJS.register(this.domEditor.nativeElement, {
    //   recognitionParams: {
    //     type: 'MATH',
    //     protocol: 'WEBSOCKET',
    //     apiVersion: 'V4',
    //     server: {
    //       scheme: 'https',
    //       host: 'webdemoapi.myscript.com',
    //       applicationKey: '7498d8dc-55db-4f40-8a80-625de7e17bed',
    //       hmacKey: '2ef4521b-5697-4653-8f8f-defede0bac55',
    //     },
    //     v4: {
    //       math: {
    //         mimeTypes: ['application/x-latex']
    //       }
    //     }
    //   },
    // });
  }
}

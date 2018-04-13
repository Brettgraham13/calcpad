import { Component, AfterViewInit, ViewChild,  ElementRef, ViewEncapsulation} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as MyScriptJS from 'myscript/dist/myscript.min.js';
import * as PepJS from  'pepjs/dist/pep';
// import * as myScriptMath from '../../../bower_components/webcomponentsjs/webcomponents-lite';

@IonicPage()
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'page-my-script-canvas',
  templateUrl: 'my-script-canvas.html',
  styleUrls: ['my-script-canvas.scss']
})
export class MyScriptCanvasPage implements AfterViewInit {
  @ViewChild("tref", {read: ElementRef}) 
  domEditor: ElementRef;
  title = 'app';
  editor: any;
  ngAfterViewInit() : void {
    // your code
    //  console.log(this.domEditor.nativeElement);
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
        
    this.editor = MyScriptJS.register(this.domEditor.nativeElement,configuration);
    // this.editor = MyScriptJS.register(editorElement,configuration);




    // window.addEventListener('load', () => {
      
        //       const mathElement = document.querySelector('myscript-math-web');
        //       console.log('All resources finished loading! Starting to init myscript-math-web');
        //       // Please change applicationkey and hmackey below with those send by mail during your registration. You can re-access them by connecting to your dashboard at developer.myscript.com with your myscript account
        //       const configuration = {
        //           scheme: 'https',
        //           host: 'webdemoapi.myscript.com',
        //           applicationKey: '515131ab-35fa-411c-bb4d-3917e00faf60',
        //           hmacKey: '54b2ca8a-6752-469d-87dd-553bb450e9ad'
        //       };
        //       // Testing if attributes binding via DOM, setAttribute or direct object manipulation is working.
        //       mathElement.setAttribute('scheme', configuration.scheme);
        //       mathElement.setAttribute('host', configuration.host);
        //       mathElement.applicationkey = configuration.applicationKey;
        //       mathElement.hmackey = configuration.hmacKey;
        //       // Testing if options are taken into account
        //       mathElement.configuration = {
        //           recognitionParams: {
        //               timestampFloatPrecision: 2,
        //               v4: {
        //                   export: {
        //                       jiix: {
        //                           'bounding-box': true,
        //                           'strokes': true
        //                       }
        //                   }
        //               }
        //           }
        //       };
        //       mathElement.mimetypes = ['application/vnd.myscript.jiix'];
        //       mathElement.unloaded = false;
        //   });

    // window.addEventListener('resize', function () {
    //   editorElement.editor.resize();
    // });

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

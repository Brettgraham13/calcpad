import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ElementRef, ViewChild} from '@angular/core';
import * as MyScriptJS from 'myscript/dist/myscript.min.js';
import { splitMatchedQueriesDsl } from '@angular/core/src/view/util';

@Component({
  selector: 'page-my-script-canvas',
  templateUrl: 'my-script-canvas.html'
})

export class MyScriptCanvasPage {

  @ViewChild('editor') editor: ElementRef;

  constructor(public navCtrl: NavController) {

  }

  editorElement;

  clear = function(){
    this.editorElement.clear();
  }

  undo = function(){
    this.editorElement.undo();
  }

  redo = function(){
    this.editorElement.redo();
  }

  convert = function(){
    this.editorElement.convert();
  }
      
  

  ngAfterViewInit() {
      this.editorElement = MyScriptJS.register(this.editor.nativeElement, {
      recognitionParams: {
        type: 'MATH',
        protocol: 'WEBSOCKET',
        apiVersion: 'V4',
        server: {
          scheme: 'https',
          host: 'webdemoapi.myscript.com',
          applicationKey: '7498d8dc-55db-4f40-8a80-625de7e17bed',
          hmacKey:  '2ef4521b-5697-4653-8f8f-defede0bac55',
        },
      },
    });
  }
}




import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ElementRef, ViewChild} from '@angular/core';
import * as MyScriptJS from 'myscript/dist/myscript.min.js';
import * as config from './config.json';



@Component({
  selector: 'page-my-script-canvas',
  templateUrl: 'my-script-canvas.html'
})

export class MyScriptCanvasPage {

  @ViewChild('editor') 
  editor: ElementRef;
  
  constructor(public navCtrl: NavController) {

  }
  appKey = config.applicationKey;
  hmacKey = config.hmacKey;
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
          applicationKey: this.appKey,
          hmacKey: this.hmacKey,
        },
      },
    });
    
  }
}




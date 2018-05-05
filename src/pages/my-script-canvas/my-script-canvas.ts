import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ElementRef, ViewChild} from '@angular/core';
import { AlertController } from 'ionic-angular';
import * as MyScriptJS from 'myscript/dist/myscript.min.js';
import * as config from './config.json';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ScreenOrientation } from '@ionic-native/screen-orientation';



@Component({
  selector: 'page-my-script-canvas',
  templateUrl: 'my-script-canvas.html'
})

export class MyScriptCanvasPage {

  @ViewChild('editor') 
  editor: ElementRef;
  
  constructor(public navCtrl: NavController, private screenOrientation: ScreenOrientation, private alertCtrl: AlertController) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  appKey = config.applicationKey;
  hmacKey = config.hmacKey;
  editorElement;
  latex;
  warning = 'Unknown Warning';
  browser = new InAppBrowser();


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

  export = function(){
    if(this.editorElement.exports && this.editorElement.exports["application/x-latex"]){
      this.latex = this.editorElement.exports["application/x-latex"]
      this.presentPrompt();
    }
  }

  checkToReplaceSymbol = function(str, char, newChar, index){
    if(str.charAt(index) == char){
      if(index == str.length){
        str = str.substring(0, index-1) + newChar;
      }
      else if(index == 0){
        str = newChar + str.substring(1, str.length); 
      }
      else{
        str = str.substring(0, index) + newChar + str.substring(index+1);
      }
    }
    return(str);
  }

  findClosingBracket(str, openBracketIndex){
    //Get the index of the first set of outermost closing parentheses
    var numOpen = 1;
    var numClose = 0;
    var i = openBracketIndex + 1;
    while(numClose < numOpen){
        if(str.charAt(i) == "{"){
            numOpen = numOpen + 1;
        }
        if(str.charAt(i) == "}"){
            numClose = numClose + 1;
        }
        i++;
    }
    return(i-1);
}

  reformatFractions = function(str){
    var indexOfFrac = str.indexOf('\\dfrac');
    var firstCurlyBoyIndex = str.substring(indexOfFrac).indexOf('{') + indexOfFrac;
    var lastCurlyBoyIndex = this.findClosingBracket(str, firstCurlyBoyIndex);
    if(indexOfFrac == 0){
      str = str.substring(6, lastCurlyBoyIndex + 1) + '/' + str.substring(lastCurlyBoyIndex + 1);
    }
    else {
      str = str.substring(0, indexOfFrac) + str.substring(indexOfFrac + 6, lastCurlyBoyIndex + 1) + '/' + str.substring(lastCurlyBoyIndex + 1);
    }
    return(str);
  }

  reformatTimes = function(str){
    var indexOfTimes = str.indexOf('\\times');
    if(indexOfTimes == 0){
      //Do nothing, the string is meaningless anyway
      //str = '*' + str.substring(indexOfTimes + 7);
    }
    else {
      str = str.substring(0, indexOfTimes) + '*' + str.substring(indexOfTimes + 7);
    }
    return(str);  
  }

  encodeToURL = function(lat){
    //So we leave this.latex unmodified we create a new string to play with
    var editLat = lat;
    var tempIndex;

    //Reformat fractions to something wolfram understands
    while(editLat.indexOf('\\dfrac') != -1){
      editLat = this.reformatFractions(editLat);
    }

    while(editLat.indexOf('\\times') != -1){
      editLat = this.reformatTimes(editLat);
    }

    //Iterate backwards along the string
    for(var i = lat.length; i > -1; i--){
      // Encode problematic symbols
      editLat = this.checkToReplaceSymbol(editLat, '%', '%25', i);
      editLat = this.checkToReplaceSymbol(editLat, '\\', '%5c', i);
      editLat = this.checkToReplaceSymbol(editLat, '-', '%2D', i);
      editLat = this.checkToReplaceSymbol(editLat, '+', '%2B', i);
      //Special replace cases for brackets to help wolfram out
      if(editLat.charAt(i) == '{'){
        if(editLat.charAt(i-1)!='_'){
          editLat = this.checkToReplaceSymbol(editLat, '{', '(', i);
          // Also change the closing bracket
          editLat = this.checkToReplaceSymbol(editLat, '}', ')', this.findClosingBracket(editLat, i));
        }
        //Have to add in a space to clarify for our friends at wolfram
        else{
          editLat = this.checkToReplaceSymbol(editLat, '}', '} ', this.findClosingBracket(editLat, i));
        }
      }
      editLat = this.checkToReplaceSymbol(editLat, ' ', '%20', i);
      // These guys don't seem to cause problems and make it worse when they're encoded
      // editLat = this.checkToReplaceSymbol(editLat, '.', '%2E', i);
      // editLat = this.checkToReplaceSymbol(editLat, '<', '%3C', i);
      // editLat = this.checkToReplaceSymbol(editLat, '>', '%2E', i);
      // editLat = this.checkToReplaceSymbol(editLat, '^', '%5E', i);
      // editLat = this.checkToReplaceSymbol(editLat, '_', '%5F', i);
      // editLat = this.checkToReplaceSymbol(editLat, '|', '%7C', i);
    }
    // console.log(editLat);
    return(editLat);
  }

  validString = function(str){
    if(!this.tooManyOpenBrackets(this.latex)){
      this.warning = "Too many '{' compared to '}'";
      this.presentAlert();
      return(false);
    }
    if(!this.tooManyCloseBrackets(this.latex)){
      this.warning = "Too many '}' compared to '{'"
      this.presentAlert();
      return(false);
    }
    // Is a set of equations, we don't currently support calls to wolfram for that
    if(str.indexOf('\\begin{aligned}') != -1){
      this.warning = "Wolfram doesn't recognize aligned equations :("
      this.presentAlert();
      return(false);
    }
    //It's a matrix, we don't currently support calls to wolfram for that
    if(str.indexOf('\\begin{pmatrix}') != -1){
      this.warning = "Wolfram doesn't recognize matrices in this format. This feature is coming soon!"
      this.presentAlert();
      return(false);
    }
    return(true);
  }

  wolframAlphaCall = function() {
    if(this.validString(this.latex)){
      this.browser.create('https://www.wolframalpha.com/input/?i=' + this.encodeToURL(this.latex), '_system');
    }
  }

  tooManyOpenBrackets = function(str){
    var numOpen = 0;
    var numClose = 0;
    for(var i = 0; i < str.length; i++){
      if(str.charAt(i) == '{'){
        numOpen++;
      }
      if(str.charAt(i) == '}'){
        numClose++;
      }
    }
    if(numOpen > numClose){
      return(false);
    }
    return(true);
  }

  tooManyCloseBrackets = function(str){
    var numOpen = 0;
    var numClose = 0;
    for(var i = 0; i < str.length; i++){
      if(str.charAt(i) == '{'){
        numOpen++;
      }
      if(str.charAt(i) == '}'){
        numClose++;
      }
    }
    if(numOpen < numClose){
      return(false);
    }
    return(true);
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
        title: 'Warning',
        subTitle: this.warning,
        buttons: ['Dismiss']
    });
    alert.present();
}

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: "Latex output", //"This is your input in Latex format. To search it on Wolfram Alpha in an external browser, tap 'WOLFRAM|ALPHA'.",
      message: this.latex,
      buttons: [
        {
          text: 'Wolfram|Alpha',
          role: 'link to wolfram',
          handler: data => {
            this.wolframAlphaCall();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
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

  // Some latex string I used for testing
  // \\int ^{1}_{0}5 {x}/{x+1}dx
  // \\int y\\times 2dy
}
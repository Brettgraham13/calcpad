import { Component, ViewChild, Renderer, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
// import { CanvasPageModule } from "./canvas.module"

/**
 * Generated class for the CanvasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canvas',
  templateUrl: 'canvas.html',
})
export class CanvasPage {

  @HostListener('window:resize', ['$event']) 
  onResize(event){
    console.log("Width: " + event.target.innerWidth);
  }

  @ViewChild('myCanvas') 

  canvas: any;
  canvasElement: any;
  lastX: number;
  lastY: number;

  currentColor: string = '#1abc9c';
  brushSize: number = 10;

  availableColors: string [];

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }
  constructor(public platform: Platform, public renderer: Renderer) {
    console.log('Hello CanvasDraw Component');

    this.availableColors = [
      '#1abc9c',
      '#3498db',
      '#9b59b6',
      '#e67e22',
      '#e74c3c'
    ];
  }

  ngAfterViewInit(){
  
    this.canvasElement = this.canvas.nativeElement;

    this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
    this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height()*3/4 + '');

  }

  changeColor(color){
    this.currentColor = color;
  }

  changeSize(size){
    this.brushSize = size;
  }

  handleStart(ev){

    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;
  }

  handleMove(ev){

    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.touches[0].pageX;
    let currentY = ev.touches[0].pageY;

    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.currentColor;
    ctx.lineWidth = this.brushSize;
    ctx.stroke();      
  
    this.lastX = currentX;
    this.lastY = currentY;

  }

  clearCanvas(){
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0,0,this.canvasElement.width,this.canvasElement.height);
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CanvasPage');
  // }

}


// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {

//   constructor(public navCtrl: NavController) {

//   }

// }
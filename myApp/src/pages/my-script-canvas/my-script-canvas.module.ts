import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyScriptCanvasPage } from './my-script-canvas';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MyScriptCanvasPage
  ],
  imports: [
    IonicPageModule.forChild(MyScriptCanvasPage),
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyScriptCanvasPage]
})
export class MyScriptCanvasPageModule {}

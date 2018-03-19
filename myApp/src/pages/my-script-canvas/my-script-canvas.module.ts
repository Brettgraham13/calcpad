import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyScriptCanvasPage } from './my-script-canvas';

@NgModule({
  declarations: [
    MyScriptCanvasPage,
  ],
  imports: [
    IonicPageModule.forChild(MyScriptCanvasPage),
  ],
})
export class MyScriptCanvasPageModule {}

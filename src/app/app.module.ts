import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { CalcPage } from '../pages/calc/calc';
import { TabsPage } from '../pages/tabs/tabs';
import { MyScriptCanvasPage } from '../pages/my-script-canvas/my-script-canvas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
// import { CanvasPage } from '../pages/canvas/canvas';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    CalcPage,
    // CanvasPage,
    TabsPage,
    MyScriptCanvasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    // CanvasPage,
    CalcPage,
    TabsPage,
    MyScriptCanvasPage
  ],
  providers: [
    StatusBar,
    ScreenOrientation,
    InAppBrowser,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

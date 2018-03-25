import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { CalcPage } from '../calc/calc';
import { CanvasPage } from '../canvas/canvas';
import { MyScriptCanvasPage } from '../my-script-canvas/my-script-canvas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CalcPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = CanvasPage;
  tab5Root = MyScriptCanvasPage;

  constructor() {

  }
}

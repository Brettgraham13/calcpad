import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { CalcPage } from '../calc/calc';
import { CanvasPage } from '../canvas/canvas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CalcPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = CanvasPage;

  constructor() {

  }
}

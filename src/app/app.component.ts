import { Component, Injector } from '@angular/core';
import { User } from './model/user';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './ui/popup/popup.component';
import { PopupService } from './service/popup.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'companyAss';



  constructor(
    injector: Injector
  ) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }




}

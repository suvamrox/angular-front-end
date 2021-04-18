import { Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from '../ui/popup/popup.component';


@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(

  ) { }

  // This uses the new custom-element method to add the popup to the DOM.
  showAsElement(data: any) {
    // Create element
    const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;

    // Listen to the close event
    popupEl.addEventListener('close', () => document.body.removeChild(popupEl));

    // Set the user data
    popupEl.userData = data;

    // Add to the DOM
    document.body.appendChild(popupEl);
  }

}

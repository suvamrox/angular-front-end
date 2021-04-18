import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../ui/pagination/pagination.component';
import { ActionComponent } from '../ui/action/action.component';
import { PopupComponent } from '../ui/popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from '../interceptor/header.interceptor';
import { ErrorInterceptor } from '../interceptor/error.interceptor';



@NgModule({
  declarations: [
    PaginationComponent,
    ActionComponent,
    PopupComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    PaginationComponent,
    ActionComponent,
    PopupComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class SharedModule { }

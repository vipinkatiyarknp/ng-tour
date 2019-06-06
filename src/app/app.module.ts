import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppTourComponent } from './ng-tour-app/ng-tour.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

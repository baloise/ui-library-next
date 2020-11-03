import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  } from '@baloise/ui-library-next-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BalUiLibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

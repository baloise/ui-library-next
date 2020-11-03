import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BalUiLibraryModule } from '@baloise/ui-library-next-angular/src/';

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

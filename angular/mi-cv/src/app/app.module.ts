import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpFormComponent } from './cmp-form/cmp-form.component';
import { CmpCvComponent } from './cmp-cv/cmp-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpFormComponent,
    CmpCvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

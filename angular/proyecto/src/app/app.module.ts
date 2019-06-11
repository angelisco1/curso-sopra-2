import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { CmpComunicacionEntreCmpsComponent } from './cmp-comunicacion-entre-cmps/cmp-comunicacion-entre-cmps.component';
import { CmpInferior1Component } from './cmp-comunicacion-entre-cmps/cmp-inferior1/cmp-inferior1.component';
import { CmpInferior2Component } from './cmp-comunicacion-entre-cmps/cmp-inferior2/cmp-inferior2.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    CmpDataBindingComponent,
    CmpComunicacionEntreCmpsComponent,
    CmpInferior1Component,
    CmpInferior2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { CmpComunicacionEntreCmpsComponent } from './cmp-comunicacion-entre-cmps/cmp-comunicacion-entre-cmps.component';
import { CmpInferior1Component } from './cmp-comunicacion-entre-cmps/cmp-inferior1/cmp-inferior1.component';
import { CmpInferior2Component } from './cmp-comunicacion-entre-cmps/cmp-inferior2/cmp-inferior2.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { OcultarPipe } from './cmp-pipes/ocultar.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { PowerModeDirective } from './cmp-directivas/power-mode.directive';
import { CmpOfertasTrabajoComponent } from './cmp-ofertas-trabajo/cmp-ofertas-trabajo.component';
import { CardJobComponent } from './cmp-ofertas-trabajo/card-job/card-job.component';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    CmpDataBindingComponent,
    CmpComunicacionEntreCmpsComponent,
    CmpInferior1Component,
    CmpInferior2Component,
    CmpPipesComponent,
    DoblePipe,
    ReversePipe,
    OcultarPipe,
    FiltroPipe,
    CmpDirectivasComponent,
    MarcarDirective,
    PowerModeDirective,
    CmpOfertasTrabajoComponent,
    CardJobComponent,
    CmpServiciosComponent,
    CmpAComponent,
    CmpBComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

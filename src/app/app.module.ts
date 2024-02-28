import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ServicesCardComponent } from './pages/services/services-card.component';
import { TitleComponent } from './components/title/title.component';
import { FarmaciaComponent } from './pages/services/farmacia/farmacia.component';
import { DividasComponent } from './pages/services/dividas/dividas.component';
import { MercadoComponent } from './pages/services/mercado/mercado.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicesCardComponent,
    TitleComponent,
    FarmaciaComponent,
    DividasComponent,
    MercadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

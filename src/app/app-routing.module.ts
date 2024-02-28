import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ServicesCardComponent } from './pages/services/services-card.component';
import { FarmaciaComponent } from './pages/services/farmacia/farmacia.component';
import { DividasComponent } from './pages/services/dividas/dividas.component';
import { MercadoComponent } from './pages/services/mercado/mercado.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'services', component: ServicesCardComponent },
  { path: 'farma', component: FarmaciaComponent},
  { path: 'dividas', component: DividasComponent},
  { path: 'shop', component: MercadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

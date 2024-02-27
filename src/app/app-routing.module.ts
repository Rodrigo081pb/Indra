import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ServicesCardComponent } from './pages/services/services-card.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'services', component: ServicesCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

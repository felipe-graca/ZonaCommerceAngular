import { CompraFinalizadaComponent } from './Pages/compraFinalizada/compraFinalizada.component';
import { RegisterComponent } from './Pages/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'register', component: RegisterComponent},
  {path: 'ok', component: CompraFinalizadaComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

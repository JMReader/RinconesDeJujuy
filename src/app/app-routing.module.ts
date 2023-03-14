import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInFormComponent } from './components/check-in-form/check-in-form.component';
import { SingleCheckComponent } from './components/single-check/single-check.component';
import { WorkViewComponent } from './components/work-view/work-view.component';
import { SignComponent } from './components/sign/sign.component';
import { ReservaDetailsComponent } from './components/reserva-details/reserva-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: '', component: WorkViewComponent },
  { path: 'test', component: SingleCheckComponent },
  { path: 'check-in/:status', component: CheckInFormComponent },
  { path: 'sign/:id', component: SignComponent }, 
  { path: 'details/:id', component: ReservaDetailsComponent},
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

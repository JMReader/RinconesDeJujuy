import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleCheckComponent } from './components/single-check/single-check.component';
import { WorkViewComponent } from './components/work-view/work-view.component';

const routes: Routes = [
{path: '', component:WorkViewComponent},
{path: 'test', component:SingleCheckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

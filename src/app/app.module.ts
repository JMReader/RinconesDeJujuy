import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkViewComponent } from './components/work-view/work-view.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { SingleCheckComponent } from './components/single-check/single-check.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    WorkViewComponent,
    HeaderComponent,
    SingleCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

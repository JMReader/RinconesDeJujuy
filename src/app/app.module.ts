import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SignaturePadModule  } from 'angular2-signaturepad';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkViewComponent } from './components/work-view/work-view.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { SingleCheckComponent } from './components/single-check/single-check.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CheckInFormComponent } from './components/check-in-form/check-in-form.component';



import { SignComponent } from './components/sign/sign.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkViewComponent,
    HeaderComponent,
    SingleCheckComponent,

    CheckInFormComponent,

    SignComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignaturePadModule,
    NgbModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

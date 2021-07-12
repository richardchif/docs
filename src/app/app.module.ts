import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RequestComponent } from './request/request.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { InternalComponent } from './internal/internal.component';
import { PendingComponent } from './pending/pending.component';
import { IssueComponent } from './issue/issue.component';
import { InternalItemsComponent } from './internal-items/internal-items.component';
import { PleaseComponent } from './please/please.component';
import { PasswordfComponent } from './passwordf/passwordf.component';
import { Please1Component } from './please1/please1.component';
import { ToastModule } from 'ng-uikit-pro-standard';
import { Please2Component } from './please2/please2.component'

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    LoginComponent,
    PasswordComponent,
    InternalComponent,
    PendingComponent,
    IssueComponent,
    InternalItemsComponent,
    PleaseComponent,
    PasswordfComponent,
    Please1Component,
    Please2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
     HttpClientModule,
    FormsModule,
    ToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

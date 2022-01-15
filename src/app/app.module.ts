import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientModule } from '@angular/common/http'

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { PreHomeComponent } from './pre-home/pre-home.component'; // interceptor?
import { SharedModule } from './shared.module';




@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    LogInFormComponent,
    ForgotPassComponent,
    HomeComponent,
    ErrorPageComponent,
    PreHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, //HttpClientModule
    SharedModule
  ],
  providers: [
      // provider used to create fake backend
      fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

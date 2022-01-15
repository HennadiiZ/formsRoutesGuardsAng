import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component'
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';
import { PreHomeComponent } from './pre-home/pre-home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { SharedModule } from './shared.module';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]}, //
  {path: 'pre-home', component: PreHomeComponent, canActivate: [AuthGuard]},
  {path: 'sign-up', component: SignUpFormComponent},
  {path: 'log-in', component: LogInFormComponent},
  {path: 'forgot-pass', component: ForgotPassComponent},
  {path: 'error-page', component: ErrorPageComponent },
  {path: '**', redirectTo: '/error-page' }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {

  logInForm!: FormGroup;

  constructor(
   public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]  ),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)] ), 
    })
  }

  submit(){
    if(this.logInForm.valid){
      const logInFormData = this.logInForm.value;

      console.log('logInFormData = this.logInForm.value:' ,logInFormData)

      const user: User = { // for now it's not doing anything
        email: this.logInForm.value.email,
        password: this.logInForm.value.password
      }

      this.auth.login(user).subscribe(()=>{
        this.logInForm.reset()
        this.router.navigate(['/'])
      })
    } 
  }
  
  goToForgotPass(){
    this.router.navigate(['/forgot-pass']);
  }

  goToSignUpPage(){
    this.router.navigate(['/sign-up']);
  }


}

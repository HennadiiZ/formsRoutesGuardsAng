import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {


  form!: FormGroup;

   constructor(public router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.email, Validators.required, Validators.maxLength(20)]  ),
      password: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)] ),
      confirmPassword: new FormControl(null, [Validators.required]) //Validators.pattern(this.form.value.password)
    },
    {
      validators: this.MustMatch('password', 'confirmPassword')
    })
  }

  //confirmPassword:
  MustMatch(controlName: string, matchingControlName: string):any{
            return (formGroup: FormGroup)=>{
                const control = formGroup.controls[controlName];
                const matchingControl = formGroup.controls[matchingControlName];
                if(matchingControl.errors && !matchingControl.errors['MustMatch']){
                  return
                }
                if(control.value !== matchingControl.value){
                  matchingControl.setErrors({MustMatch: true})
                }else{
                  matchingControl.setErrors(null);
                }
            }
  }

  submit(){
    // console.log('Form submitted:', this.form)
    // console.log(this.form.value)
    // console.log({...this.form.value})

    // const formData = {...this.form.value}
   
    // console.log(formData.firstName)

    if(this.form.valid){
      const formData = this.form.value
      console.log('formData = this.form.value:',formData)
      //console.log(this.form.value.password)
      this.form.reset()
    }
    // this.form.reset()
  }

  goToLogInPage(){
    this.router.navigate(['/log-in']);
  }

}

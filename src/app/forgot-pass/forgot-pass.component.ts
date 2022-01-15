import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPassService } from '../services/reset-pass.servise';


@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {


  //1 same
  public form: any = {
   email: null
  };


  //2 same
  forgotPassForm!: FormGroup;

  constructor(
    public router: Router,
    private resetPassService: ResetPassService
  ) { }

  ngOnInit() {
    this.forgotPassForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]  ),
    })
  }
  submit(){
    // just to see the object in dev tools
    if(this.forgotPassForm.valid){
      const forgotPassFormData = this.forgotPassForm.value;
      console.log('forgotPassFormData = this.forgotPassForm.value:' ,forgotPassFormData)
      this.forgotPassForm.reset()
    }

    //to reset password
    this.resetPassService.sendPasswordResetLink(this.form).subscribe( 
      data => console.log(data),
      error => console.log(error)
    )
  }

  handleResponse(res: any){
     this.form.email = null;
  }

  goToLogInPage(){
       this.router.navigate(['/log-in']);
  }

}

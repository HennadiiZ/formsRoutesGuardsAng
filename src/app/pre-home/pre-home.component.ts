import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-home',
  templateUrl: './pre-home.component.html',
  styleUrls: ['./pre-home.component.css']
})
export class PreHomeComponent implements OnInit {
 

  constructor(public router: Router) { }

  ngOnInit(){
  }






  goToLogInPage(){
    this.router.navigate(['/log-in']);
  }
  goToSignUpPage(){
    this.router.navigate(['/sign-up']);
  }

}

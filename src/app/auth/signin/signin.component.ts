import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginAttempted:boolean=false;
  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  onSignIn(form: NgForm){
    this.authService.signinUser(form.value.email, form.value.password);
  
    this.loginAttempted=true;
    //if(this.authService.isAuthenticated()) { //async so this doesn't do what you want
    //this.loginSuccess=true; 
    //}
    console.log("onSignIn email["+form.value.email+"] loginAttempted["+this.loginAttempted+"]");
  }
}

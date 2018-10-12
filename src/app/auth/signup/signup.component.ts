import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupAttempted: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  onSignUp(form: NgForm){
    this.signupAttempted=false;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
    this.signupAttempted=true;
    console.log("onSignup email["+email+"] signupAttempted["+this.signupAttempted+"]");
  }
}

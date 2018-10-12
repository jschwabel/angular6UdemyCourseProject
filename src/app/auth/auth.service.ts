import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;
  public errorMessage: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    this.errorMessage="";
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => { 
        console.log("signupUser error",error.message); 
        this.errorMessage=error.message;
      }
    );
  }

  signinUser(email: string, password: string) {
    this.errorMessage="";
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => { 
          console.log("signinUser error",error.message); 
          this.errorMessage=error.message;
        }
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}

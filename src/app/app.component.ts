import { Component, Input, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() openWhich: string = "Recipes";

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDZZkkjjSVv7lA8T5k-5RaDykMg4PuVbAU",
      authDomain: "udemy-recipe-book-1977.firebaseapp.com"
    });
  }

  onSelectFired(openWhich: string) {
    //console.log("onSelectFired openWhich["+openWhich+"]");
    this.openWhich=openWhich;
  }

}

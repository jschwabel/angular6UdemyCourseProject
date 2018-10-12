import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
//import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
//import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, 
  public authService: AuthService, 
   private router: Router) { }

  ngOnInit() {
    
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response)=>{
      //(response: HttpEvent<Object>) => {
        console.log(response);
      }
      );
    
  }

  onFetchData() {
    this.dataStorageService.getRecipes();

  }
  onLogout(){
   this.authService.logout();
    this.router.navigate(['/signin']);
  }

}

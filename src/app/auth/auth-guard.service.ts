import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isAuthenticated = this.authService.isAuthenticated();
        if(!isAuthenticated) {
            alert("Recipe Book: Please login to access this option.");
        }
        return isAuthenticated;
        
    }
}
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("intercept", request);
        //const copiedRequest = request.clone({headers: request.headers("","")});
        const copiedRequest = request.clone({params: request.params.set("auth", this.authService.getToken())});
        console.log("intercept", copiedRequest);
        return next.handle(copiedRequest);

    }
}
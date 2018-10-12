import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";

export class LoggingInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).do(//"do" is like subscribe but it doesn't get consumed
            event => {
                console.log("LoggingInterceptor", event);
            }
        );
    }
}
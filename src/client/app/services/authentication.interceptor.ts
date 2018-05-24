import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = sessionStorage.getItem('token');

        if (token) {
            const clonedRequest = request.clone({
                headers: request.headers.set('authorization', token)
            });

            return next.handle(clonedRequest);
        } else {
            return next.handle(request);
        }
    }
}

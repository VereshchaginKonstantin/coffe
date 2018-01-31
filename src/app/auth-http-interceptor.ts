import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('AuthInterceptor');
        const idToken = localStorage.getItem('id_token');

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization',
                    'JWT ' + idToken)
            });
            console.log(cloned);

            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}
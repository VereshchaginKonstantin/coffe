import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';

import { User } from './dto/user';
import * as moment from 'moment';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) {

    }

    login(username: string, password: string) {
        console.log('login');
        return this.http.post('/api/jwt-auth/', { username : username, password : password })
            .toPromise().then(res => this.setSession);
    }

    private setSession(authResult) {
        console.log('setSession');
        console.log(authResult.expiresIn);
        const expiresAt = moment().add(authResult.expiresIn, 'second');
        console.log(expiresAt);

        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
        console.log(authResult.token);
    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
}

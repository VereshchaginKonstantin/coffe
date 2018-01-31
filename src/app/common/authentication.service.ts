import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';

import { User } from './dto/user';
import * as moment from 'moment';
import { pathAdd } from '../globalConstant';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) {

    }

    login(username: string, password: string) {
        console.log('login');
        return this.http.post(pathAdd + '/api/jwt-auth/', { username : username, password : password })
            .toPromise()
            .then(res => {
                this.setSession(res);
            })
            .catch(this.handleError);
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.until, 'second');
        console.log(authResult.token);
        console.log(authResult.until);
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
        console.log('isLoggedIn');
        console.log('expired  - ' + this.getExpiration().toLocaleString());
        console.log('isBefore  - ' + moment().isBefore(this.getExpiration()));
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

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      }
}

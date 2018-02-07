import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';

import { User } from './dto/user';
import * as moment from 'moment';
import { pathAdd } from '../globalConstant';
import { UserService } from './user.service';
import { AlertService } from './alert.service';
import { Event } from './lite.event';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

    private currentUser = new Subject<string>();
    private readonly onLogin = new Event.LiteEvent<string>();
    private readonly onLogout = new Event.LiteEvent<void>();

    public get LoggedIn() { return this.onLogin.expose(); }
    public get LoggedOut() { return this.onLogout.expose(); }

    constructor(private http: HttpClient, private userService: UserService,
        private alertService: AlertService) {
    }

    login(username: string, password: string) {
        return this.http.post(pathAdd + '/api/jwt-auth/', { username: username, password: password })
            .toPromise()
            .then(res => {
                this.currentUser.next(username);
                this.setSession(res);
                this.onLogin.trigger(username);
            });
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.until, 'second');

        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        this.currentUser.next('');
        this.onLogout.trigger();
    }

    public getUser(): Observable<string> {
        return this.currentUser.asObservable();
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

    private handleError(error: any, alertService: AlertService): Promise<any> {
        alertService.error('An error occurred' + error);
        return Promise.reject(error.message || error);
    }
}

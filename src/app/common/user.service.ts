import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthenticationService } from './authentication.service';
import { User } from './dto/user';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Promise<User[]> {
        // add authorization header with jwt token
        const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        const options = new RequestOptions({ headers: headers });

        // get users from api

        return this.http
      .get('/api/users')
      .toPromise()
      .then((response) => {
        return response.json().data as User[];
      })
      .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      }
}

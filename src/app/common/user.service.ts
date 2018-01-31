import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthenticationService } from './authentication.service';
import { User } from './dto/user';
import { pathAdd } from '../globalConstant';

@Injectable()
export class UserService {
    constructor(
        public http: HttpClient,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Promise<User[]> {
      return this.http
      .get<User>(pathAdd + '/api/users/')
      .toPromise()
      .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pathAdd } from '../globalConstant';
import { AuthenticationService } from './authentication.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Bucket } from './dto/bucket';

@Injectable()
export class BucketlistService {

  constructor(
    public http: HttpClient,
    private authenticationService: AuthenticationService) {
  }

  getBuckets(): Promise<Bucket[]> {
    return this.http
      .get<Bucket>(pathAdd + '/api/bucketlists/')
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}

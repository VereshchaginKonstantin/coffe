import { Component, OnInit } from '@angular/core';
import { BucketlistService } from '../common/bucketlist.service';
import { Bucket } from '../common/dto/bucket';
import { User } from '../common/dto/user';
import { UserService } from '../common/user.service';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {

  users: User[] = [];
  buckets: Bucket[];

  constructor(private service: BucketlistService, private userService: UserService) { }

  ngOnInit() {
    this.service.getBuckets()
    .then(x => this.buckets = x);
    this.userService.getUsers()
      .then(users => this.users = users);
  }

}

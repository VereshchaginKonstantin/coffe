import { Component, OnInit } from '@angular/core';
import { BucketlistService } from '../common/bucketlist.service';
import { Bucket } from '../common/dto/bucket';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {

  buckets: Bucket[];

  constructor(private service: BucketlistService) { }

  ngOnInit() {
    this.service.getBuckets()
    .then(x => this.buckets = x);
  }

}

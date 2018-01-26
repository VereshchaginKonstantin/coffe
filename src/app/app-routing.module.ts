import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { Location } from '@angular/common'; 
import { BucketlistComponent } from './bucketlist/bucketlist.component'; 

const routes: Routes = [
  { path: 'bitbucket', component: BucketlistComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})



export class AppRoutingModule {

  constructor() {

  }

  ngOnInit() {
  }
}

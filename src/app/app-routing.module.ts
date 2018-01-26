import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BitbucketComponent } from './bitbucket/bitbucket.component';

const routes: Routes = [
  { path: 'bitbucket', component: BitbucketComponent }
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

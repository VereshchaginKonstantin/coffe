import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { Location } from '@angular/common'; 
import { BucketlistComponent } from './bucketlist/bucketlist.component'; 
import { CanActivateViaAuthGuard } from './can-activate-via-auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'bitbucket', component: BucketlistComponent, canActivate: [CanActivateViaAuthGuard]  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
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

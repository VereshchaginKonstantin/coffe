import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { CanActivateViaAuthGuard } from './can-activate-via-auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'bitbucket', component: BucketlistComponent, canActivate: [CanActivateViaAuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})



export class AppRoutingModule {

  constructor() {
  }
}

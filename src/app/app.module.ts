import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CanActivateViaAuthGuard } from './can-activate-via-auth.guard';
import { AuthenticationService } from './common/authentication.service';
import { UserService } from './common/user.service';
import { AuthHttpInterceptor } from './auth-http-interceptor';
import { BucketlistService } from './common/bucketlist.service';
import { AlertService } from './common/alert.service';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ArticlesComponent } from './articles/articles.component';
import { StatusComponent } from './status/status.component';
import { RegistrationComponent } from './registration/registration.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    BucketlistComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    MenuComponent,
    ContactsComponent,
    ArticlesComponent,
    StatusComponent,
    RegistrationComponent,
    AlertComponent
  ],
  imports: [
    SlideMenuModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MomentModule,
  ],
  providers: [
    CanActivateViaAuthGuard,
    AuthenticationService,
    UserService,
    BucketlistService,
    AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

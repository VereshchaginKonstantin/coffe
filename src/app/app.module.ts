import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CanActivateViaAuthGuard } from './can-activate-via-auth.guard';
import { AuthenticationService } from './common/authentication.service';
import { UserService } from './common/user.service';
import { AuthInterceptor } from './common/authInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    BucketlistComponent,
    HomeComponent,
    LoginComponent
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

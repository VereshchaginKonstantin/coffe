import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BucketlistService } from './bucketlist.service';

=======
import { AppRoutingModule } from './app-routing.module';
import { BitbucketComponent } from './bitbucket/bitbucket.component';
import { BitbucketService } from './bitbucket.service';
>>>>>>> d6f8778988fce991cd3263a29e41e6ef76329a9b

@NgModule({
  declarations: [
    AppComponent,
    BitbucketComponent
  ],
  imports: [
    SlideMenuModule,
    BrowserModule,
    AppRoutingModule
  ],
<<<<<<< HEAD
  providers: [BucketlistService],
=======
  providers: [BitbucketService],
>>>>>>> d6f8778988fce991cd3263a29e41e6ef76329a9b
  bootstrap: [AppComponent]
})
export class AppModule { }

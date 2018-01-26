import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BucketlistComponent } from './bucketlist/bucketlist.component'; 

@NgModule({
  declarations: [
    AppComponent,
    BucketlistComponent
  ],
  imports: [
    SlideMenuModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

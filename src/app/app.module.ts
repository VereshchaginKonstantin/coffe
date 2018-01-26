import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BitbucketComponent } from './bitbucket/bitbucket.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

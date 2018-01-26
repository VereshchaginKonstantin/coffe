import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BitbucketComponent } from './bitbucket/bitbucket.component';
import { BitbucketService } from './bitbucket.service';

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
  providers: [BitbucketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

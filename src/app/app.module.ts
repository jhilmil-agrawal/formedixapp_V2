import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InfiniteScrollModule } from 'ngx-infinite-scroll';
import {HttpClientModule} from "@angular/common/http"
import { ImageserviceService } from './imageservice.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,InfiniteScrollModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [ImageserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

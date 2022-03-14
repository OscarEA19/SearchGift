import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GiftModule } from './gift/gift.module';
import { ShareModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShareModule,
    GiftModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

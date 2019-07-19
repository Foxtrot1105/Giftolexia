import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { EnglishComponent } from './languages/english/english.component';
import { UnderstandingComponent } from './contents/understanding/understanding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnglishComponent,
    UnderstandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

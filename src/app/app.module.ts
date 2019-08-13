import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryBarComponent } from './category-bar/category-bar.component';
import { DisplayJokesComponent } from './display-jokes/display-jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryBarComponent,
    DisplayJokesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

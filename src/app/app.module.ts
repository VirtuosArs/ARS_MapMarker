import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MenuComponent } from './menu/menu.component';
import { DetailComponent } from './detail/detail.component';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmSnazzyInfoWindowModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routes,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJsIzDVD83bRkJUC7958Zyeo6oI-F35A4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

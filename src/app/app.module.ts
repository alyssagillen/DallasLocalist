import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderGraphicComponent } from './components/header-graphic/header-graphic.component';
import { ArrowHeadingComponent } from './components/arrow-heading/arrow-heading.component';
import { RectangleBoxComponent } from './components/rectangle-box/rectangle-box.component';
import { EventCardComponent } from './components/event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderGraphicComponent,
    ArrowHeadingComponent,
    RectangleBoxComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

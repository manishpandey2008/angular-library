import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MagicStringModule } from 'magic-string';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MagicStringModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvellousFirstAppComponent } from './marvellous-first-app/marvellous-first-app.component';
import { MarvellousLableComponent } from './marvellous-lable/marvellous-lable.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousFirstAppComponent,
    MarvellousLableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DonutdetailComponent } from './donutdetail/donutdetail.component';
import { DonutsComponent } from './donuts/donuts.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutdetailComponent,
    DonutsComponent,
    FamousPeopleComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule //Add this and the associated import statement above
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

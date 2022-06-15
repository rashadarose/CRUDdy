import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

//import { InMemoryDataService } from './in-memory-data.service';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';



import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { HeroesComponent } from './heroes/heroes.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    HelpComponent,
    HeroesComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    /* HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),*/
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    MatTableModule,
    MatChipsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    DragDropModule
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

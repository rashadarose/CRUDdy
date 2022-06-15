import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [

	{ path: 'about', component: AboutComponent },
  	{ path: 'contact', component: ContactComponent },
  	{ path: 'dashboard', component: DashboardComponent },
  	{ path: 'help', component: HelpComponent },
  	{ path: 'heroes', component: HeroesComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

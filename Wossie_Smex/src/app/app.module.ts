import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {routes} from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultListComponent } from './result-list/result-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultComponent } from './result/result.component';
import { PersonComponent } from './result/person/person.component';
import {TimelineModule} from "primeng/timeline";
export const routs: Routes = [
  { path: 'results', component:  ResultComponent },
  { path: '', redirectTo: 'results', pathMatch: 'full' }
];
///const routes1: Routes =routes

@NgModule({
  declarations: [
    AppComponent,
    ResultListComponent,
    ResultComponent,
    PersonComponent
//    TimelineModule,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResultListComponent} from './result-list/result-list.component';
import {ResultComponent} from './result/result.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path : '',
    component: ResultListComponent
  },{
    path : 'result/:Identifier',
    component : ResultComponent
  },{
    path : 'home',
    component : HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

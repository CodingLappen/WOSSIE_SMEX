import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResultListComponent} from './result-list/result-list.component';

const routes: Routes = [
  {
    path : '',
    component: ResultListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

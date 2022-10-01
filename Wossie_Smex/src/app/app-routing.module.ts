import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListComponent} from './result-list/result-list.component' ;
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'results' },
  { path: 'results', component: ResultListComponent },
  //{ path: 'about', component: AboutComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

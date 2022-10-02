import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormListService { 
  private source = new  BehaviorSubject('[]');
  currentMessage = this.source.asObservable();

  constructor() { }
  changeData(message: string){
	this.source.next(message)  
  }
}

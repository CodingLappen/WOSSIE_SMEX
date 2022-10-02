import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultResultListInteractionService {
  private current = new BehaviorSubject(0);
  private info = new BehaviorSubject({});
  currentObject = this.info.asObservable();
  currentNumber = this.current.asObservable();
  constructor() { }
  UpdateNumber(current:number){
  	this.current.next(current);
  }
  UpdateObject(current:any){
  	this.info.next(current);
  }


}

import { Component, OnInit,Inject } from '@angular/core';
import { Result } from '../result/result.component';
import { MatListModule } from '@angular/material/list';
import {FormListService} from '../form-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  s : Subscription|null=null;
  list:String ="[]";
  Results: Result[]=[
  ];
  Update(list:string):void{
	  let obj= (JSON.parse(list) as {[key: string]: any}) ;
	  let i:number;
	  this.Results=[];
	  let map = new Map();
	  for (let key of Object.keys(obj)) {
		  let result=new Result(obj[key].toString(),obj);
		  result.Identifier = key.toString();
		  this.Results.push(result);
	  }
  }

  ngOnInit(): void {
	  this.s=this.Service.currentMessage.subscribe(message => {this.list=message;this.Update(message);})
  }
  ngOnDestroy():void {
  	if (this.s!=null) this.s.unsubscribe;
  }
  constructor(private Service:FormListService) {
  }


}

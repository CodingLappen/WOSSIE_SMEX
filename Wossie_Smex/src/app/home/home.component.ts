import { Component, OnInit } from '@angular/core';
import {QueryModel} from '../QueryModel';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	
  model : QueryModel ;
  constructor(){
	  this.model=new QueryModel();
	  this.model.limit="50";
  }
  newModel ():void{
	  this.model=new QueryModel();
	  this.model.limit="50";
  }

  ngOnInit(): void {
  }
  showFormControls(q:QueryModel): string{
  
	  let s:string="http://api.wossidia.de/isebelindexrecords?"
	  s+="inclNoYear="+q.inclNoYear+"&";
	  if (q.search!="")s+="search="+q.search+"&";
	  if (q.word!="")s+="word="+q.word+"&";
	  if (q.place!="")s+="place="+q.place+"&";
	  if (q.person!="")s+="person="+q.person+"&";
	  if (q.gender!="")s+="gender="+q.gender+"&";
	  if (q.yearMin!="")s+="yearMin="+q.yearMin+"&";
	  if (q.yearMax!="")s+="yearMax="+q.yearMax+"&";
	  if (q.limit!="")s+="limit="+q.limit+"&";
	  return s;
  }
  OnClick(): void {
	  let url:string= this.showFormControls(this.model);
	  //httpHeader = {headers: new HttpHeaders({'Content-Type':'application/json'})}

  
  }

}

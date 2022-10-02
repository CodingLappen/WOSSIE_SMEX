import { Component, OnInit } from '@angular/core';
import {QueryModel} from '../QueryModel';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {tap} from "rxjs/operators";
import {Router } from '@angular/router';
import {FormListService} from '../form-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	
  model : QueryModel ;
  xml : string = "";
  s:Subscription|null = null;
  constructor(private router: Router,private http:HttpClient,private data:FormListService){
	  this.model=new QueryModel();
	  this.model.limit="50";
  }
  newModel ():void{
	  this.model=new QueryModel();
	  this.model.limit="50";
  }

  ngOnInit(): void {
	  this.s=this.data.currentMessage.subscribe(message => {});
  }
  ngOnDestroy(){
	  if (this.s!=null) this.s.unsubscribe();
  }
  showFormControls(q:QueryModel): string{
  
	  let s:string="http://localhost:4200/api/isebel/index/"+q.search+"?"
	  s+="inclNoYear="+q.inclNoYear+"&";
	  s+="data=true&";
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
	  let output = this.http.get<string>(url,{headers:{'TARGET-URL':'https://digibibapp14.uni-rostock.de/wopqueries','Content-Type':'text/json', 'Accept':'text/json'}}).pipe(
	  	tap({
			next: (data:any)=>{},
			error: (error:any) => {console.log(error)}
		})
	  );
	  output.subscribe(resp=>{
		  this.xml=resp;
		  this.data.changeData(JSON.stringify(this.xml));
		  this.router.navigateByUrl('/list' );
	  
	  })
	  //httpHeader = {headers: new HttpHeaders({'Content-Type':'application/json'})}

  
  }

}

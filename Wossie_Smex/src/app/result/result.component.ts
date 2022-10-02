import { Component, OnInit,ViewChild } from '@angular/core';
import {PersonComponent} from  './person/person.component' ;
import {Inject,Input} from "@angular/core"
import {Router,ActivatedRoute} from "@angular/router";
import {ResultListComponent} from '../result-list/result-list.component';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {tap,Subscription} from 'rxjs';
import {ResultResultListInteractionService} from '../result-result-list-interaction.service';
//import {matList} from '@angular/material'


enum Language {
  platt='platt',
  deutsch='deutsch',
  english='englisch'
}

export class Result {
	 persons: string[] =[];
	 places: string[] =[];
	 gender: string = "Männlich";
	 year : any = "0" ;
	 title: string = "";
	 text : string = "";

	 titleFunc() :string {
	  return this.title +": " + this.text.slice(0,this.text.length> 20?20:this.text.length);
	 }

        Identifier: String ="";
	data : any = {};
	constructor(Identifier?:string,data?:any){
		if (Identifier!=undefined) this.Identifier=Identifier;
		if (data!=undefined) {
			this.data=data;
		console.log(data);
		console.log(data['year']);
		console.log(data.year );
	  	if (data['year']!=undefined) {this.year=data['year']; }
	  	if (data['text']!=undefined) {this.text=data['text']; }
	  	if (data['title']!=undefined) {this.title=data['title']; }
	  	if (data['places']!=undefined) {this.places.push(data['places'].toString()); }
	  	if (data['gender']!=undefined) {this.gender=data['gender'].toString()=='m' ? 'männlich' : 'weiblich'; }

	  	if (data['persons']!=undefined) {this.persons.push(JSON.stringify(data['persons'])); }
		}
	}
}
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent extends Result implements OnInit{
  sub: Subscription|null=null;
  sub2: Subscription|null=null;

  OnLoad() : void {
	  if (this.Identifier=="") return ;
	  let url = "http://localhost:4200/api/isebel/story/"+this.Identifier;
	  let output = this.http.get<string>(url,{headers:{'TARGET-URL':'https://digibibapp14.uni-rostock.de/wopqueries','Content-Type':'text/xml', 'Accept':'text/xml'}}).pipe(
	  	tap({
			next: (data:any)=>{},
			error: (error:any) => {console.log(error)}
		})
	  );
	  output.subscribe(resp=>{
		  console.log(resp)
	  })
  }
  ngOnInit(): void {
	this.sub= this.service.currentNumber.subscribe(((n:number) => {this.Identifier=n.toString()}))
	this.sub2= this.service.currentObject.subscribe(((n:any) => {this.data=n; if (n.has('year')) {this.year=n['year']; } if (n.has('persons')) {this.persons.push(n['persons']) }}))
	this.OnLoad();
	if (this.data!=undefined) {}
  }
  ngOnDestroy():void {
	  if (this.sub!=null) this.sub.unsubscribe();
	  if (this.sub2!=null) this.sub2.unsubscribe();
  }

  constructor(private http:HttpClient,private service:ResultResultListInteractionService,private rcl? : ActivatedRoute) {
	  super();
        if (rcl==undefined) return;
        let the: string|null =  rcl.snapshot.paramMap.get('Identifier');
        if (the!=null) this.service.UpdateNumber(Number(the));
    }

}

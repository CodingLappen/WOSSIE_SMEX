import { Component, OnInit,ViewChild } from '@angular/core';
import {PersonComponent} from  './person/person.component' ;
import {Inject,Input} from "@angular/core"
import {Router,ActivatedRoute} from "@angular/router";
import {ResultListComponent} from '../result-list/result-list.component';
//import {matList} from '@angular/material'


enum Language {
  platt='platt',
  deutsch='deutsch',
  english='englisch'
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{

  ngOnInit(): void {
  }
  //Content :Map<Language,String> = new Map<Language,String>();
  //Persons : PersonComponent[] = [];
  Identifier: String ="That didn't work!";

  //toJSON(){
  //  let subobj:Map<String,String>=new Map<String,String>();
  //  ///this.Content.forEach((value:String,key:String) => {subobj.set(key,value)});
  //  let slist:string[]=[];
  //  ///this.Persons.forEach( function(person :PersonComponent) {slist.push(person.toJSON())})
  //  let obj={
  //    Content:subobj,
  //    Persons:slist,
  //    Identifier:this.Identifier,
  //  };
  //  return JSON.stringify(obj);
  //}
  //fromJson(json:string){
  //  //let parsed=JSON.parse(json);
  //  //this.get('Persons').ForEach(function(obj:string) {this.Persons.push(new PersonComponent(obj))})
  //}


  constructor(private rcl? : ActivatedRoute) {
        if (rcl==undefined) return;
        let the: string|null =  rcl.snapshot.paramMap.get('Identifier');
        if (the!=null) this.Identifier=the;
    }

}

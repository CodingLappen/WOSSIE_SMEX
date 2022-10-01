import { Component, OnInit } from '@angular/core';
import {PersonComponent} from  './person/person.component' ;


enum Language {
  platt,
  deutsch,
  english
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

//  Content :Map<Language,String> = new Map<Language,String>();
//  Persons : PersonComponent[] = [];
  Identifier: String ;

  constructor(ident:String) {
    this.Identifier=ident;
  }

  ngOnInit(): void {
  }

}

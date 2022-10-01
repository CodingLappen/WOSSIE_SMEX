import { Component, OnInit } from '@angular/core';
import {ResultComponent} from '../result/result.component'

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  Results: ResultComponent[] ;

  constructor() { 
    this.Results= [new ResultComponent("Something"),new ResultComponent("Else")];
  }

  ngOnInit(): void {
  }

}


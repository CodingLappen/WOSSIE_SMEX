import { Component, OnInit } from '@angular/core';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  Results: ResultComponent[];

  constructor() {
    this.Results=[new ResultComponent("It works"), new ResultComponent("This works too!")];
  }

  ngOnInit(): void {
  }

}

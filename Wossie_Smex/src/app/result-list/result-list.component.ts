import { Component, OnInit } from '@angular/core';
import { ResultComponent } from '../result/result.component';
import { MatListModule } from '@angular/material/list'

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  Results: ResultComponent[]=[
    new ResultComponent(),
    new ResultComponent(),
    new ResultComponent(),
    new ResultComponent(),
    new ResultComponent(),
  ];

  ngOnInit(): void {
  }
  constructor() {
    this.Results[0].Identifier="Nr.1";
    this.Results[1].Identifier="Nr.2";
    this.Results[2].Identifier="Nr.3";
    this.Results[3].Identifier="Nr.4";
    this.Results[4].Identifier="Nr.5";
  }


}

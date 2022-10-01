import { Component, OnInit } from '@angular/core';

enum Gender {
  Female,
  Male
}
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  Name:string;
  Gender:Gender;
  livingPlace:string="";
  ngOnInit(): void {
  }

  constructor() {
    this.Name="Max Mustermann"; 
    this.Gender=Gender.Male;
    this.livingPlace="";
  }


}

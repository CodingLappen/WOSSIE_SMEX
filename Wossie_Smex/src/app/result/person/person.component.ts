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
  toJSON() : string {
    let obj={
      Name:this.Name,
      livingPlace:this.livingPlace,
      Gender:this.Gender==Gender.Male?'m':'f',
    };
    return JSON.stringify(obj);
  }
  fromJSON(json:string){

  }
  Name:string;
  Gender:Gender;
  livingPlace:string="";
  ngOnInit(): void { }
  //@Inject("json") json:String ="";
  constructor(json? :String | null) {
    this.Name="Max Mustermann"; 
    this.Gender=Gender.Male;
    this.livingPlace="";
    //if (json != undefined && json != null) {
    //  this.fromJSON(json);
    //}
  }


}

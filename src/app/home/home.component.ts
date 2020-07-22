import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
itemCount:number;
projectText:string="Angulat project";
projects=[]
  constructor() { }

  ngOnInit() {
    this.itemCount=this.projects.length;
  }
additems(){
  this.projects.push(this.projectText);
  this.projectText="";
  this.itemCount=this.projects.length;
}
removeItems(i)
{
this.projects.splice(i,1);
this.itemCount=this.projects.length;
}
}
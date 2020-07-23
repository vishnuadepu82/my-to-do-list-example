import { Component, VERSION } from '@angular/core';
import {PersonserviceService} from './../personservice.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  persons=[];
  name = 'Angular ' + VERSION.major;
  constructor(private _personservice:PersonserviceService)
  {

  }
  ngOnInit()
  {
    this._personservice.getData().subscribe(data=>this.persons=data);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Persondetails} from './persondetails'
import {Observable} from 'rxjs'
@Injectable({providedIn:'root'})
export class PersonserviceService {

  constructor(private http:HttpClient) { 

  }
private testjson:string="./test.json"
getData():Observable<Persondetails[]>
  {
    return this.http.get<Persondetails[]>(this.testjson);
  }

}
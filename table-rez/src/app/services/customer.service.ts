import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
export interface Customer{
  userID: string
  firstName: string
  lastName:string
}
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http:HttpClient){}
    get(url:string)
    {
      return this.http.get(url);
    }
    post(url:string,data:any){
      return this.http.post(url,data);
    }
}

import { Injectable } from '@angular/core';
import {Restaurant} from './restaurant';
import {RESTAURANTS} from './mock-restaurants';
import{Observable, of} from 'rxjs';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
  getRestaurants():Observable<Restaurant[]>{
    return of(RESTAURANTS);
  }
}

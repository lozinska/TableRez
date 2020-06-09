import { Injectable } from '@angular/core';
import {Restaurant} from './restaurant';
import {RESTAURANTS} from './mock-restaurants';
import{Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
  getRestaurants():Observable<Restaurant[]>{
    return of(RESTAURANTS);
  }
}

import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../restaurant';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
restaurant: Restaurant =
{restaurantId: 1,
  restaurantName:'Mucho Burrito'
}
  constructor() { }

  ngOnInit(): void {
  }

}

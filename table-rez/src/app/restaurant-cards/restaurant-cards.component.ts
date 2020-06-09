import { Component, OnInit,Input } from '@angular/core';
import {Restaurant} from '../restaurant';
import {RestaurantService} from '../restaurant.service';

@Component({
  selector: 'app-restaurant-cards',
  templateUrl: './restaurant-cards.component.html',
  styleUrls: ['./restaurant-cards.component.css']
})
export class RestaurantCardsComponent implements OnInit {
  @Input() restaurant: Restaurant;
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant;
  constructor(private restaurantService:RestaurantService) { }
  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants():void{
    this.restaurantService.getRestaurants()
    .subscribe(restaurants=>this.restaurants=restaurants);
  }

}

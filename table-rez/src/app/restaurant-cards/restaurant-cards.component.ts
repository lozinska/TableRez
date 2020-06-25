import { Component, OnInit,Input } from '@angular/core';
import {Restaurant} from '../models/restaurant';
import {RestaurantService} from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-cards',
  templateUrl: './restaurant-cards.component.html',
  styleUrls: ['./restaurant-cards.component.css']
})
export class RestaurantCardsComponent implements OnInit {
  @Input() restaurants: any[]=[];
  //restaurants: Restaurant[]=[];
  selectedRestaurant: any={id:null,name:'',email:''};


  constructor(private restaurantService:RestaurantService) { }
  ngOnInit() {
    this.getRestaurants();
  }

  private getRestaurants(){
    this.restaurantService.getRestaurants().then((response:any)=>{
      this.restaurants=response.map((restaurant)=>{
        restaurant.body=restaurant.email;
        restaurant.header=restaurant.name;
        return restaurant;
      })
    })
  }

}

import { Component, OnInit,Input } from '@angular/core';
import {Restaurant} from '../models/restaurant';
import {RestaurantService} from '../services/restaurant.service';
import{Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-restaurant-cards',
  templateUrl: './restaurant-cards.component.html',
  styleUrls: ['./restaurant-cards.component.css']
})
export class RestaurantCardsComponent implements OnInit {
  @Input() restaurants: any[]=[];
  selectedRestaurant: any={id:null,name:'',email:''};


  constructor(private restaurantService:RestaurantService,
    private router:Router) { }
  ngOnInit() {
    this.getRestaurants();
  }
navigate(id,name){
  let navigationExtras: NavigationExtras={
    queryParams:{
      rest_id:id,
      rest_name:name
    }
  }
  this.router.navigate(['singlerestaurant'],navigationExtras);
}
  private getRestaurants(){
    this.restaurantService.getRestaurants().then((response:any)=>{
      this.restaurants=response.map((restaurant)=>{
        restaurant.body=restaurant.email;
        restaurant.header=restaurant.name;
        restaurant.image=restaurant.restaurant_image;
        restaurant.id=restaurant.restaurantID;
        return restaurant;
      })
    })
  }

}

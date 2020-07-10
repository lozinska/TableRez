import { Component, OnInit, Input } from '@angular/core';
import {RestaurantService} from '../services/restaurant.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import{Restaurant} from '../models/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

 selectedRestaurant:any={id:null,name:'',email:'',desc:'',img:''};
 @Input() restaurants: any[]=[];
 constructor(private restaurantService:RestaurantService,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params=>{
       this.selectedRestaurant.id=params.rest_id;
       console.log( this.selectedRestaurant.id)
      })
    }

  ngOnInit(): void {
      this.pickRestaurant(this.selectedRestaurant.id);
  }

  private pickRestaurant(id){
/*
    this.restaurantService.getOneRestaurant(id).then((response:any)=>{
      this.selectedRestaurant=response.map((restaurant)=>{
        console.log(restaurant.name)
        console.log(restaurant.restaurantID);
        this.selectedRestaurant.name=restaurant.name;
        //restaurant.body=restaurant.email;
        //restaurant.header=restaurant.name;
return restaurant;
    })
      })
     */
    this.restaurantService.getOneRestaurant(id).then((response:any)=>{
      this.restaurants=response.map((restaurant)=>{
        this.selectedRestaurant.desc=restaurant.restaurant_desc;
        this.selectedRestaurant.name=restaurant.name;
        this.selectedRestaurant.email=restaurant.email;
        this.selectedRestaurant.img=restaurant.restaurant_image;
return restaurant;
    })
      })
    }

}

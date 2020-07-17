import { Component, OnInit, Input } from '@angular/core';
import {RestaurantService} from '../services/restaurant.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import{Restaurant} from '../models/restaurant';
import { AddressService } from '../services/address.service';
import{MenuService} from '../services/menu.service';
import { response } from 'express';
import{SectionService} from '../services/section.service';
import{ItemService} from '../services/item.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  isShow=true;
 selectedRestaurant:any={id:null,name:'',email:'',desc:'',img:''};
 selectedAddress:any={id:null, description:'',post_code:''};
 selectedMenu:any={id:null,name:''};
 selectedSection:any={id:null,name:''};
 selectedItem:any={id:null,name:'', description:'',measurement:'',size:'',price:''};
 @Input() restaurants: any[]=[];
 @Input() addresses: any[]=[];
 @Input() menus: any[]=[];
 @Input() sections: any[]=[];
 @Input() items: any[]=[];
 notShow=true;
 displayedColumns = [ 'name', 'description', 'unit','size','price'];
 constructor(private restaurantService:RestaurantService,
  private addressService:AddressService,
  private menuService:MenuService,
  private sectionService:SectionService,
  private itemService:ItemService,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params=>{
       this.selectedRestaurant.id=params.rest_id;
      })

    }

  ngOnInit(): void {
      this.pickRestaurant(this.selectedRestaurant.id);
  }

  private pickRestaurant(id){

    this.restaurantService.getOneRestaurant(id).then((response:any)=>{
      this.restaurants=response.map((restaurant)=>{
        this.selectedRestaurant.desc=restaurant.restaurant_desc;
        this.selectedRestaurant.name=restaurant.name;
        this.selectedRestaurant.email=restaurant.email;
        this.selectedRestaurant.img=restaurant.restaurant_image;
        this.addressService.getAddress(restaurant.addressID).then((response:any)=>{
          this.addresses=response.map((address)=>{
            this.selectedAddress.description=address.addressDescription;
            this.selectedAddress.post_code=address.postalCode;
            return address
          })

        })
return restaurant;
    })
      })
    }

    displayMenu(){
this.menuService.getMenu(this.selectedRestaurant.id).then((response:any)=>{
  this.menus=response.map((menu)=>{
    this.selectedMenu.name=menu.menuName;
    this.sectionService.getSection(menu.menuID).then((response:any)=>{
      this.sections=response.map((section)=>{
        section.name=section.sectionName;
        section.id=section.sectionID;
    return section;
      })
    })
      })
    })
    console.log(JSON.stringify(this.items));
      this.isShow=!this.isShow;
    }

    displayItem(id){
      this.itemService.getItem(id).then((response:any)=>{
        this.items=response.map((item)=>{
       return item;
      })
    })
    }
}

import { Component, OnInit, Input } from '@angular/core';
import {Restaurant} from '../restaurant';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  @Input() restaurant: Restaurant;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit,Input } from '@angular/core';
import {TableSectionService} from '../services/table-section.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators,EmailValidator, ControlContainer } from '@angular/forms';
import {BookingService} from '../services/booking.service';
import {TableService} from '../services/table.service'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  firstFormGroup;
  secondFormGroup;
  maxDate: Date;
  minDate:Date;
  time;
  date;
  table=true;
  reservationForm:FormGroup;
  @Input() tableSections: any[]=[];
  @Input() tables: any[]=[];
  selectedRestaurant:any={id:null,name:'',email:'',desc:'',img:''};
  selected;
  constructor(
    private tableService: TableService,
    private tableSectionService:TableSectionService,
    private bookingService: BookingService,
    private formBuilder:FormBuilder,
    private route: ActivatedRoute) {
  const currentYear = new Date().getFullYear();
  this.minDate=new Date(currentYear, new Date().getMonth(),new Date().getDate())
  this.maxDate = new Date(currentYear, new Date().getMonth()+1,new Date().getDate());
  this.route.queryParams.subscribe(params=>{
  this.selectedRestaurant.id=params.rest_id;
  this.time=params.rest_time;
   })
  }
  ngOnInit(): void {
    this.reservationForm=this.formBuilder.group({
      restaurantID:['']
    });
console.log(this.date);
this.displayBookingForm();
  }
  createBooking() {
    const newBooking = {
    restaurantID: this.selectedRestaurant.id
  };
  this.bookingService.addBooking(newBooking);
}

  displayBookingForm(){
    this.tableSectionService.getTableSectionsById(this.selectedRestaurant.id).then((response:any)=>{
      this.tableSections=response.map((tableSection)=>{
        this.selected=tableSection.tableSectionName

     return tableSection;
    })
  })
  }
  displayTable(id){
    this.tableService.getTableById(id).then((response:any)=>{
      this.tables=response.map((table)=>{
        console.log(JSON.stringify(table))
        return table;
      })
    })
  }
}

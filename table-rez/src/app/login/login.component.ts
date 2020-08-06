import { Component, OnInit, Input } from '@angular/core';
import{ActivatedRoute,Router, NavigationExtras} from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CustomerService} from '../services/customer.service';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id;
  loginForm:FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  user:any;
  selectedUser={id:null,firstName:'',lastName:''}
@Input() users:any[]=[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http:HttpClient,
    private customerService: CustomerService
  ) { }

   ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  //  this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/login';
  }

 login(id){

this.customerService.loginUser(this.loginForm.get('email').value, this.loginForm.get('password').value)
this.customerService.getUserByEmail(this.loginForm.get('email').value).then((response:any)=>{
 this.users=response.map((loginUser)=>{
   this.selectedUser.id=loginUser.userID;
   return loginUser;
 })

})

  let navigationExtras: NavigationExtras={
    queryParams:{
   // user_email:this.loginForm.get('email').value,
    user_id:1
    }
  }
  console.log(id)
  this.router.navigate(['/customerPage'],navigationExtras)
};
}

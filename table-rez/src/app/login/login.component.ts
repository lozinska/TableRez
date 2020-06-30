import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  user:any;

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

 login(){

this.customerService.loginUser(this.loginForm.get('email').value, this.loginForm.get('password').value)
  .then(()=>this.router.navigate(['/']))

};
}

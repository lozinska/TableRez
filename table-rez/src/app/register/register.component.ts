import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {CustomerService} from '../services/customer.service';
import { FormBuilder, FormGroup, Validators,EmailValidator } from '@angular/forms';
import { AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
passwordCheck=true;


currentCustomer: any = {id: null, firstName: '', lastName: '', phone:'',email:'',password:''};
  constructor(
    private formBuilder:FormBuilder,
    private customerService:CustomerService) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required,emailValid()],
      password:['',Validators.required,Validators.minLength(6)],
        confirmPassword:['', Validators.required]
      }, {validator:matchingFields('password','confirmPassword')});
    }
  createCustomer() {
    const newCustomer = {
      firstName: this.registerForm
      .get('firstName').value,
      lastName: this.registerForm
      .get('lastName').value,
    phone: this.registerForm.get('phone').value,
    email: this.registerForm.get('email').value,
    password: this.registerForm.get('password').value
  };
  this.customerService.createUser(newCustomer);
  }
  checkPassword(inputPass){
const paswd='/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/';
if(!inputPass.value.match(paswd)){
  this.passwordCheck=false;
}
}

}
function matchingFields(field1,field2){
  return registerForm => {
    if(registerForm.controls[field1].value !== registerForm.controls[field2].value)
    return {mismatchedFields:true}
  }
}

function emailValid(){
  return control => {
    var regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(control.value) ? null:{invalidEmail:true}
  }
}


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { RestaurantCardsComponent } from './restaurant-cards/restaurant-cards.component';
import { RegisterComponent } from './register/register.component';
import{RestaurantComponent} from './restaurant/restaurant.component';
import {RegisterManagerComponent} from './register-manager/register-manager.component';
import {LoginManagerComponent} from './login-manager/login-manager.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AddMenusectionComponent } from './add-menusection/add-menusection.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
{path:'', component:RestaurantCardsComponent},
{path:'register', component:RegisterComponent},
{path: 'manager', component:RegisterManagerComponent},
{ path: 'login', component: LoginComponent },
{ path: 'login-manager', component: LoginManagerComponent },
{ path: 'singlerestaurant', component: RestaurantComponent },
{path:'reservation',component:ReservationComponent},
{path: 'addSection', component: AddMenusectionComponent },
{path: 'addItem', component: AddItemComponent },
{path: 'managerRes', component: ManagerComponent},
{path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


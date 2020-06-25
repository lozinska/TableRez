import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { RestaurantCardsComponent } from './restaurant-cards/restaurant-cards.component';

const routes: Routes = [
{ path: '',component:RestaurantCardsComponent},
 { path: 'login', component: LoginComponent },
 {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

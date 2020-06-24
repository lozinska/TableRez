import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantCardsComponent } from './restaurant-cards/restaurant-cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantDetailComponent,
    RestaurantCardsComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantCardsComponent } from './restaurant-cards/restaurant-cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { AuthService } from './services/auth.service';
import {LoginComponent} from './login/login.component';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RestaurantCardsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule
    ],
  providers: [CustomerService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

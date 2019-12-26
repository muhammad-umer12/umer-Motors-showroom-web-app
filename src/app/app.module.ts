import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VerticalnavComponent } from './verticalnav/verticalnav.component';
import { UppernavwithoutLoginComponent } from './uppernavwithout-login/uppernavwithout-login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {JwPaginationComponent} from "jw-angular-pagination";
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SignupComponent } from './signup/signup.component';
import { CarForsaleComponent } from './car-forsale/car-forsale.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerComponent } from './banner/banner.component';
import { UsedCarsComponent } from './used-cars/used-cars.component';
import { NewCarsComponent } from './new-cars/new-cars.component';
import { AllUsedCarsComponent } from './all-used-cars/all-used-cars.component';
import { ReactiveFormsModule,FormsModule, Validators } from '@angular/forms';
import { ApiService } from './signup/api.service';
import { LoginapiService } from './admin-login/loginapi.service';
import { NgxContentLoadingModule } from 'ngx-content-loading';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VerticalnavComponent,
    UppernavwithoutLoginComponent,
    HomeComponent,
    ProductsComponent,
    JwPaginationComponent,
    AdminLoginComponent,
    SignupComponent,
    CarForsaleComponent,
    DashboardComponent,
    BannerComponent,
    UsedCarsComponent,
    NewCarsComponent,
    AllUsedCarsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgxContentLoadingModule,
    
    HttpClientModule
  ],
  providers: [ApiService,LoginapiService,UppernavwithoutLoginComponent,DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

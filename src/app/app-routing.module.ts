import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VerticalnavComponent } from './verticalnav/verticalnav.component';
import { ProductsComponent } from './products/products.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UppernavwithoutLoginComponent } from './uppernavwithout-login/uppernavwithout-login.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CarForsaleComponent } from './car-forsale/car-forsale.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerComponent } from './banner/banner.component';
import { UsedCarsComponent } from './used-cars/used-cars.component';
import { NewCarsComponent } from './new-cars/new-cars.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  
  
 
  {path : '', component: BannerComponent,
    children:[
      { path:'', component:VerticalnavComponent,
        children :[
          {path : '', component: HomeComponent},
          { path:'home/:pagename', component:CarForsaleComponent},
        ]
      },
      

    ]},
  
  {path : 'product', component: ProductsComponent},
  {path : 'admin', component: AdminLoginComponent},
  {path : 'admin-signup', component: SignupComponent},

  {path : 'admin-dashboard', component: DashboardComponent,
     children:[
       {path : '', component: UsedCarsComponent},
       {path : 'new-cars', component: NewCarsComponent}
     ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

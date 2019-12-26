import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UppernavwithoutLoginComponent } from './../uppernavwithout-login/uppernavwithout-login.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
        
  constructor(private router : Router,private tt : UppernavwithoutLoginComponent) { }

  ngOnInit() {
    
    //this.router.navigateByUrl('/admin-dashboard')
    this.checkLogin()
  }

  checkLogin(){
  
    
    const p= localStorage.getItem('token');
    console.log(p)
    if(p == null)
    {
      this.router.navigateByUrl('/') 
    }
    else{
      this.router.navigateByUrl('/admin-dashboard')
    }
      

}
     rl(){
       
       this.router.navigateByUrl('/admin-dashboard')
      this.tt.reload();
     }
    
      
     
  arr: any = [
    {name:"Home"},
    {name:"Ren Cars Registrations"},
    {name:"New Vehicle Registration"},
    {name : "View Available Rentcars"},
    {name:"View Cars For sale"},
    {name:"2"},
    {name:"44"}
  ]
}

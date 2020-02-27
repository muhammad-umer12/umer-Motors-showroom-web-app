import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  NgZone } from '@angular/core';
import { isEmpty } from 'rxjs/operators';
import{ DashboardComponent } from './../dashboard/dashboard.component'
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-uppernavwithout-login',
  templateUrl: './uppernavwithout-login.component.html',
  styleUrls: ['./uppernavwithout-login.component.scss'],
  animations : [
    trigger('fade',[
      transition('void => *',[
        style({backgroundColor : 'white'}),
        
        animate(500)
      ])
    ])
  ]
})
export class UppernavwithoutLoginComponent implements OnInit {
  login: boolean;
  logout : boolean;

  constructor(private ngZone: NgZone,private router: Router) { }
    

  ngOnInit()
  {

    this.check();
   
  }

    reload(){
      window.location.reload();
    }
    check(){
    
      const p= localStorage.getItem('token');
      console.log(p)
      if(p == null)
      { console.log("token is null");
        this.login = true;
      }
      else{
        this.login= false;
        console.log("token has some value");
      }
    }
  Login(){
    
    this.login=false;
    this.logout=true;
    console.log("login call.. login = "+this.login+" logout = "+this.logout );
    
     
    
  
  }

  Logout(){
    //window.location.reload();
    this.login=true;
    this.logout=false;
    console.log("login call.. login = "+this.login+" logout = "+this.logout );
  }
  

  log()
  {
    localStorage.removeItem('token');

       
      this.Logout();
    this.ngZone.run(() => this.router.navigateByUrl('/'))
   
  }

}

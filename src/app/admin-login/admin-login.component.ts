import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {LoginapiService} from './loginapi.service'
import { Router } from '@angular/router';
import {  NgZone } from '@angular/core';
import { UppernavwithoutLoginComponent } from './../uppernavwithout-login/uppernavwithout-login.component';
import {DashboardComponent} from './../dashboard/dashboard.component'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private db : DashboardComponent,private nav: UppernavwithoutLoginComponent,private apiService : LoginapiService,  private router: Router,private ngZone: NgZone) { }

  ngOnInit() {
    this.success= false;
    this.err=false;
    this.checkLogin()
  }

  checkLogin(){
  
    
      const p= localStorage.getItem('token');
      console.log(p)
      if(p == null)
      { 
      }
      else{
        this.router.navigateByUrl('/admin-dashboard')
      }
        

  }
  err:any;
  form = new FormGroup({

    email: new FormControl('',
    [Validators.required,
  
    ]),
    password : new FormControl('',[
    Validators.required
    //SignupValidators.cannotContainSpace,
  
    ])

});

    success : any;
    get Email()
    {
      return this.form.get('email');
    }

    get Password()
    {
      return this.form.get('password');
    }

    authenticate()
    {
      console.log(this.form.value);

      this.apiService.authentication(this.form.value).subscribe(
        (res) => {
          if(res.status == '404' )
          {
              this.err=true;   
          }else
          {
          console.log('Login Successful')
          //console.log(res)
          localStorage.setItem('token',res)
          console.log(localStorage.getItem('token'));
          
          this.nav.Login();
      //    this.nav.check();
          this.success=true;
          this.err=false;  
          this.router.navigateByUrl('/admin-dashboard')
     this.db.rl();
        //  this.router.navigateByUrl('/admin-dashboard')
        //  this.nav.Logout();
          //this.ngZone.run(() => this.router.navigateByUrl('/admin-dashboard'))
        }
          
        }, (error) => {
          console.log(error);
          this.err=true;  
        });
          
            
    }

}



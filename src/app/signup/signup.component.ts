import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SignupValidators } from './signup.validators';
import {ApiService} from './api.service'
import { Router } from '@angular/router';
import {  NgZone } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private apiService : ApiService,  private router: Router,private ngZone: NgZone) { }

  ngOnInit() {
  }

  form = new FormGroup({

          username: new FormControl('',
            [Validators.required,
              SignupValidators.alphanumeric

      
            ]),
          email: new FormControl('',
          [Validators.required,
           Validators.email
          ]),
          password : new FormControl('',[
          Validators.required,
          Validators.minLength(8),
          //SignupValidators.cannotContainSpace,
          SignupValidators.notalphanumeric
          ])

  });

        get Username(){
         return this.form.get('username');
        }

        get Email()
        {
          return this.form.get('email');
         }
         get Password()
         {
          return this.form.get('password');
         }
         // signup finction
         signup()
         {
          console.log(this.form.value);

          this.apiService.createEmployee(this.form.value).subscribe(
            (res) => {
              console.log('Employee successfully created!')
              console.log(res)

              this.ngZone.run(() => this.router.navigateByUrl('/admin'))
            }, (error) => {
              console.log(error);
            });

         }


}

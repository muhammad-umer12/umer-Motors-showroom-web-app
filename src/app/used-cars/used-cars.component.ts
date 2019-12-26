import { Component, OnInit } from '@angular/core';
import {ApiService} from './used-cars.service'
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';



import { Router } from '@angular/router';
import {  NgZone } from '@angular/core';
@Component({
  selector: 'app-used-cars',
  templateUrl: './used-cars.component.html',
  styleUrls: ['./used-cars.component.scss']
})
export class UsedCarsComponent implements OnInit {

  constructor(private apiService : ApiService) 
  {
  
   }

   
   
  ngOnInit() {
  }

  table=true;
  
  changeUI(){

    this.table=false;
    
  }

  view(){

    this.table=true;
  }

    
  form = new FormGroup
   ({

    brandname: new FormControl('',
        [ 
          Validators.required
        ]),

        modelyear: new FormControl('',
        [
          Validators.required// Validators.email
        ]),

    price : new FormControl('',
    [
      Validators.required,  
    ]),

    color : new FormControl('',
     [
       Validators.required,    
     ]),

    description : new FormControl('',
     [
       Validators.required
     ]
    ),


      img_file : new FormControl('' , 
      [
         Validators.required
        ])


});


    
  get brandname(){
   return this.form.get('brandname');
  }

  get modelyear()
  {
    return this.form.get('modelyear');
   }
   get price()
   {
    return this.form.get('price');
   }

   get color()
   {
    return this.form.get('color');
   }

   get img_file()
   {
    return this.form.get('img_file');
   }

   get description()
   {
    return this.form.get('description');
   }

   selectedFiles ;

   uploadFile(fl){
         
     this.selectedFiles = fl.target.files[0];
     console.log(this.selectedFiles);

   }
    

   register(){
     console.log(this.form)
     console.log(this.form.value)
     
    console.log(this.form.value.brandname);
    console.log(this.form.value.modelyear);
        let a= this.form.value.brandname;
        let b = this.form.value.modelyear;
        let c = this.form.value.price;
        let d = this.form.value.color;
        let  e= this.form.value.description;
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        
       let obj = new FormData();         
          
      obj.append('brandname',a);
      obj.append('modelyear',b);
      obj.append('price',c);
      obj.append('color',d);
      obj.append('description',e);
    obj.append('img_file',this.selectedFiles);
      
         console.log(obj);

  this.apiService.registerCar(obj).subscribe(
      (res) => {
        console.log('Car registered successfully')
        console.log(res)

   //     this.ngZone.run(() => this.router.navigateByUrl('/admin'))
      }, (error) => {
        console.log(error);
      });  
   }

}

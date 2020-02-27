import { Component, OnInit } from '@angular/core';
import {ApiService_usedcars} from './used-cars.service'
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';



import { Router } from '@angular/router';
import {  NgZone } from '@angular/core';
import { json } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-used-cars',
  templateUrl: './used-cars.component.html',
  styleUrls: ['./used-cars.component.scss']
})
export class UsedCarsComponent implements OnInit {
  
  
  constructor(private apiService : ApiService_usedcars,public fb: FormBuilder,private sanitizer: DomSanitizer) 
  {
    this.mainForm();
    
  
   }
   
   obj : FormData;
   
  ngOnInit()
   {

     this.apiService.refreshNeeded$.subscribe(
       ()=> {
         this.getUsedCars();
       }
     )
      this.getUsedCars();
   }
     carReg = false;
     table=1;
     detail;
     imgURL;
  carDetails (details)

    {   console.log(details);
      this.imgURL = details.img_name;
  
       
        this.table=3;

        this.detail = details;
    }
  changeUI(){

    this.table=2;
    
  }

  view(){

    this.table=1;
    this.carReg=false;
  }
        form : FormGroup;

        mainForm(){

  this.form = this.fb.group({

    carname: ['',
        [ 
          Validators.required
        ]
      ],

    brandname: ['',
        [ 
          Validators.required
        ]
      ],

        modelyear : ['',
        [
          Validators.required// Validators.email
        ]],

    price : ['',
    [
      Validators.required,  
    ]],

    color :['',
     [
       Validators.required,    
     ]],

    description : ['',
     [
       Validators.required
     ]
    ],

    owner_name : ['',
     [
       Validators.required
     ]
    ],

    owner_phone : ['',
     [
       Validators.required
     ]
    ],

      img_file : ['' , 
      [
         Validators.required
        ]
      ]




});


}


get myForm(){
  return this.form.controls;
}

get carname(){
  return this.form.get('carname');
 }
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


   usedCars:any = [];
     
      getUsedCars(){
    this.apiService.getCars().subscribe((res) => {

     console.log( res );
     this.usedCars = res;
    }  
    )    
  }

    delete(obj)
    {
      if(window.confirm('Are you sure?')){
      this.apiService.deleteCar(obj._id).subscribe((data) => {
        let k = this.usedCars.indexOf(obj);
    // this.usedCars.splice(k,1);
     console.log(data);
      
      })    
    }
    }
   register()
   {
     
     console.log(this.form.value)
     
        let a= this.form.value.brandname;
        let b = this.form.value.modelyear;
        let c = this.form.value.price;
        let d = this.form.value.color;
        let  e= this.form.value.description;
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);

        
        const obj = new FormData();   
        obj.append('userId',localStorage.getItem('_id')),      
      obj.append('carname' , this.form.value.carname)
      obj.append('brandname',a);
      obj.append('modelyear',b);
      obj.append('price',c);
      obj.append('color',d);
      obj.append('description',e);
      obj.append('owner_name',this.form.value.owner_name)
      obj.append('owner_phone',this.form.value.owner_phone)

  obj.append('img_file',this.selectedFiles);
    console.log(JSON.stringify(obj))

  obj.forEach((value,key) => {
      console.log(key+" "+value)
    });
      
      
         

  this.apiService.registerCar(obj).subscribe(
      (res) => {
        this.carReg = true;
        console.log('Car registered successfully')
        console.log(res)
     //   this.usedCars.push(res)


   //     this.ngZone.run(() => this.router.navigateByUrl('/admin'))
      }, (error) => {
        console.log(error);
      }); 
      
   //   this.getUsedCars()
      
   }


   

}

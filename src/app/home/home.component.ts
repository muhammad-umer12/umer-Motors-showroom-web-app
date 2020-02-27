import { Component, OnInit } from '@angular/core';
import {ApiService_usedcars} from '../used-cars/used-cars.service'
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 /* items = [
    {name :'umer', id:1},
    {name :'umer', id:2},
    {name :'umer', id:3},
    {name :'umer', id:4},
    {name :'umer', id:5},
    {name :'umer', id:6},
    {name :'umer', id:7},
    {name :'umer', id:8},
    {name :'umer', id:10},
    {name :'umer', id:11},
    {name :'umer', id:12},
    {name :'umer', id:13},
    {name :'umer', id:14},
    {name :'umer', id:15},
    {name :'umer', id:16},
    {name :'umer', id:17},
    {name :'umer', id:18},
    {name :'umer', id:19},
    {name :'umer', id:20},
    {name :'umer', id:21},
    {name :'umer', id:22},
    {name :'umer', id:23},





  ]; */
    pageOfItems :any=[];

    constructor(private apiService : ApiService_usedcars, public fb: FormBuilder) {

      this.mainForm();

     }
     form : FormGroup;

     mainForm(){

this.form = this.fb.group({

 bid: ['',]
  })

}
   user = localStorage.getItem('_id');
    bids: any=[]


 addBid(id)
 {
   var obj = {
    _id : id._id,
     bid : this.form.value.bid,
     userId : localStorage.getItem('_id') 
   }
   console.log(obj);
   this.bids.push(obj)

  this.apiService.addbids(obj).subscribe(
(res) => {
      
      console.log('bid placed successfully')
      console.log(res)

      this.getAllUsedCars();
   //   this.bids.push(res)


 //     this.ngZone.run(() => this.router.navigateByUrl('/admin'))
    }, (error) => {
      console.log(error);
    }); 
   

 }


  accepted(bidObj, carObj){
         
      let details  = {
         bidder : bidObj.bidUserId,
         bidamount : bidObj.bidamount,
         carId : carObj._id
       }
       

       this.apiService.acceptBid(details).subscribe((res) =>
        {
           console.log("reply from bid api");
           console.log( res );
        
       }  
       )


  }

  





   description;

    ngOnInit() 
    {
      this.getAllUsedCars()
      this.description = true;
    //  this.getUsedCars();
        // an example array of 150 items to be paged
       // this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
       // console.log(this.items)
       console.log(this.pageOfItems)
    }

    usedCars:any = [];
    
      
 /*    getUsedCars(){
  this.apiService.getCars().subscribe((res) => {

   console.log( res );
   this.pageOfItems = res;

   
  })    
}  */

getAllUsedCars(){
  this.apiService.getAllCars().subscribe((res) => {
   console.log("Data agaya hai all cars ka")
   console.log( res );
   this.usedCars = res;

    
  })    
}
    carowner;
     des;
    desView(obj){
      this.description = !this.description;
      this.des = obj;
      console.log(this.des)
      this.carowner = this.des.userId
      

    }
  

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URLSearchParams } from 'url';


@Component({
  selector: 'app-car-forsale',
  templateUrl: './car-forsale.component.html',
  styleUrls: ['./car-forsale.component.scss']
})
export class CarForsaleComponent implements OnInit {

  constructor(private routr : ActivatedRoute) { }
       gett : any;
  ngOnInit() {
      this.routr.params
      .subscribe(params =>{
        console.log(params.pagename);
        this.gett=params.pagename;
          

        
      })
        
      

  }

}

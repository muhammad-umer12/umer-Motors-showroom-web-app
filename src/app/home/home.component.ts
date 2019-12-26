import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = [
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





];
    pageOfItems: Array<any>;

    constructor() { }



    ngOnInit() {
        // an example array of 150 items to be paged
       // this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
        console.log(this.items)
        console.log(this.pageOfItems)
    }

  

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }

}

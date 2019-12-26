import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verticalnav',
  templateUrl: './verticalnav.component.html',
  styleUrls: ['./verticalnav.component.scss']
})
export class VerticalnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arr: any = [
    {name:"Honda"},
    {name:"Toyota"},
    {name:"Mistubishi"},
    {name:"Kia "},
    
    {name:"Luxury "},

  ];



}

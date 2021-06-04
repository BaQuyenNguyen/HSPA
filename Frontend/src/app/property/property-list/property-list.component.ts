import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      Id: 1,
      Name: 'House 1',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 2,
      Name: 'House 1',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 3,
      Name: 'House 1',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 4,
      Name: 'House 1',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 5,
      Name: 'House 1',
      Type: 'House',
      Price: 12000,
    },
  ];

  constructor() {}

  ngOnInit() {}
}

import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
})
export class PropertyCardComponent {
  @Input() property: IProperty;
  constructor() {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { IPropertyBase } from 'src/app/models/ipropertybase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
})
export class PropertyCardComponent {
  @Input() property: IPropertyBase;
  @Input() hidenIcons: boolean;
  constructor() {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  }
}

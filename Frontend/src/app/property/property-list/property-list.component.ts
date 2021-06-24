import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/models/iproperty';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<IProperty>;
  showMessage = false;

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; // Mean we are on rent-property URL else we are on base URL
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      (data) => {
        this.properties = data;

        // const newProperty = JSON.parse(localStorage.getItem('newProp'));

        // if (newProperty.SellRent == this.SellRent) {
        //   this.properties = [newProperty, ...this.properties];
        // }
        this.properties.forEach((element) => {
          if (!element.Image) {
            element.Image = 'house_default.png';
          }
        });
      },
      (error) => {
        console.error('httperror:'), console.log(error);
      }
    );
  }
}

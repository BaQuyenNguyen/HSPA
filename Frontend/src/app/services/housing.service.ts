import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProperty } from '../models/iproperty';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<IProperty> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp'));
        if (localProperties){
          for (const id in localProperties) {
          if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
            propertiesArray.push(localProperties[id]);
          }
        }
        }
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );

    return this.http.get<IProperty[]>('data/properties.json');
  }

  addProperty(property: Property) {
    let newProp = [property];

    // Add new prooperty in array if newProp already exists inlocal storage
    if (localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp'))];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      // localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      return +localStorage.getItem('PID') + 1;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}

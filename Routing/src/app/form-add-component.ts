import { Component , OnInit } from '@angular/core';

import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'form-add',
  templateUrl: './form-add-component.html'
})
export class FormComponent {
 	cities : City[];
 	selectedcity : City;

 	constructor(private cityService : CityService){}

 	getCities() : void {
 		this.cityService.getCities().then(cities => this.cities = cities);
 	}

 	ngOnInit():void{
 		this.getCities();
 	}

 	onSelect(selctdcity : City) : void {
 		this.selectedcity = selctdcity;
 	}

 	onChange($event, deviceValue) {
 	this.selectedcity = deviceValue;
    console.log(deviceValue);
	}

	onKey(){
		this.getCities();
	}
}

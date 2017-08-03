import { Injectable } from '@angular/core';

import { City } from './city';
import { CITY } from './mock-city';

@Injectable()
export class CityService{
	getCities() : Promise<City[]>{
		return Promise.resolve(CITY);
	}
}
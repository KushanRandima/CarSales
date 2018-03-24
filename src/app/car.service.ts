import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Car } from './../Car';
import { CARS } from './../mock-cars';

@Injectable()
export class CarService {

  constructor() { }

  getCars(): Observable<Car[]> {
    return of(CARS);
  }

}

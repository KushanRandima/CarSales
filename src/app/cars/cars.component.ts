import { Component, OnInit } from '@angular/core';
import { Car } from './../../Car';
import { CARS } from './../../mock-cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {

  cars: Car[] = CARS;
  selectedCar: Car;

  constructor() { }

  ngOnInit() {
  }

  onSelect(car: Car) {
    this.selectedCar = car;
  }

}

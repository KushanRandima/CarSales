import { Component, OnInit } from '@angular/core';
import { Car } from './../../Car';
import { CarService } from '../car.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {

  cars: Car[];
  selectedCar: Car;

  constructor(private carService: CarService) { }
  
  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars()
    .subscribe(cars => this.cars = cars);
  }

  onSelect(car: Car) {
    this.selectedCar = car;
  }

}

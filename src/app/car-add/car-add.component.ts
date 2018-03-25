import { Component, OnInit, Input } from '@angular/core';
import { Car } from './../../Car';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  nextId: number;
  car: Car;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location) { }

  ngOnInit() {
    this.createNewCar();
  }

  getNextCarId(): void {
    this.carService.getCars()
      .subscribe(cars => this.nextId = cars.length + 1);
  }

  goBack(): void {
    this.location.back();
  }

  createNewCar(): any {
    this.getNextCarId();
    this.car =
      {
        id: this.nextId,
        make: "",
        name: "",
        wheels: 0,
        type: "",
        features: []
      };
  }

  add() {
    debugger;
    this.carService.addCar(this.car);
    this.createNewCar();
  }

  isValidForm(): boolean {
    if (this.car.make && this.car.name && this.car.type
      && this.car.wheels > 0)
      return true;
    else
      return false;
  }
}

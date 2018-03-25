import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CarsComponent }      from './cars/cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarAddComponent } from './car-add/car-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CarDetailComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'add', component: CarAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
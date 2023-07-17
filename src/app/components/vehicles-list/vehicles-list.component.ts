import { Component } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
})
export class VehiclesListComponent {
  vehicles: Vehicle[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private vehicleService: VehicleService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          return this.vehicleService.getVehicleList(id);
        })
      )
      .subscribe((vehicles) => {
        this.vehicles = vehicles;
        return this.vehicles;
      });
  }
}

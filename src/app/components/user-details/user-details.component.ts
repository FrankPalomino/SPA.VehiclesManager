import { Component } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { switchMap } from 'rxjs';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent {
  user?: User;
  vehicles: Vehicle[] = [];
  id: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          this.id = id;
          return this.userService.getUserById(id);
        })
      )
      .subscribe((user) => {
        this.user = user;
        return this.user;
      });
  }
}

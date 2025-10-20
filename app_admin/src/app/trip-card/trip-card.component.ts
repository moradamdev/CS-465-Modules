import { Component, OnInit, Input } from '@angular/core';
import { CommonModule, JsonPipe, CurrencyPipe } from '@angular/common';
import { Router } from "@angular/router";
import { Trip } from "../models/trip";
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone:true,
  imports: [CommonModule, JsonPipe, CurrencyPipe],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent {
  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void{

  }

  public editTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(["edit-trip"]);
  }

  public isLoggedIn(){
    return this.authenticationService.isLoggedIn();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TicketBooikingService } from 'src/app/service/ticket-booiking.service';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.scss']
})
export class SearchTicketsComponent implements OnInit {

  selectedFrom = 'MAA';
  selectedTo = 'BLR';
  class = 'Economy';
  children = 0;
  adults = 0;
  matDatepicker: any;
  Rpicker: any;
  departureDate = new FormControl(new Date());
  returnDate = new FormControl();
  trip: String = 'ONEWAY';
  searchQuery: any;

  displayedColumns: string[] = ['airline', 'departureTime', 'arrivalTime', 'price', 'seat'];
  dataSource: any;

  constructor(private route: ActivatedRoute, private ticketBooikingService:TicketBooikingService) {
    this.route.queryParams.subscribe(params => {
      this.selectedFrom = params['from'];
      this.selectedTo = params['to'];
    });
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();


  }
  onClickTrip() {
    console.log('onClickTrip');
    this.returnDate = this.trip == 'ONEWAY' ? new FormControl(null) : new FormControl(new Date());
  }
  search() {
    console.log("clicked")
    this.dataSource = [
      {
        "id": 1,
        "source": "Chennai",
        "sourceTerminal": "1",
        "destination": "Bangalore",
        "destinationTerminal": "2",
        "airline": "AirIndia",
        "flightNumber": "123",
        "departureTime": 1651028875868,
        "arrivalTime": 1651028875868,
        "seat": 1,
        "price": 300
      },
      {
        "id": 2,
        "source": "Chennai",
        "sourceTerminal": "1",
        "destination": "Bangalore",
        "destinationTerminal": "2",
        "airline": "AirIndia",
        "flightNumber": "123",
        "departureTime": 1651028875868,
        "arrivalTime": 1651028875868,
        "seat": 4,
        "price": 300
      },
      {
        "id": 3,
        "source": "Chennai",
        "sourceTerminal": "1",
        "destination": "Bangalore",
        "destinationTerminal": "2",
        "airline": "AirIndia",
        "flightNumber": "123",
        "departureTime": 1651028875868,
        "arrivalTime": 1651028875868,
        "seat": 1,
        "price": 300
      },
      {
        "id": 4,
        "source": "Chennai",
        "sourceTerminal": "1",
        "destination": "Bangalore",
        "destinationTerminal": "2",
        "airline": "AirIndia",
        "flightNumber": "123",
        "departureTime": 1651028875868,
        "arrivalTime": 1651028875868,
        "seat": 5,
        "price": 300
      },
      {
        "id": 5,
        "source": "Chennai",
        "sourceTerminal": "1",
        "destination": "Bangalore",
        "destinationTerminal": "2",
        "airline": "AirIndia",
        "flightNumber": "123",
        "departureTime": 1651028875868,
        "arrivalTime": 1651028875868,
        "seat": 2,
        "price": 300
      },
      {
        "id": 25,
        "source": "Chennai",
        "sourceTerminal": "1",
        "destination": "Bangalore",
        "destinationTerminal": "2",
        "airline": "AirIndia",
        "flightNumber": "123",
        "departureTime": 1651028875868,
        "arrivalTime": 1651028875868,
        "seat": 3,
        "price": 300
      }
    ];
  }
  ngOnInit(): void {
  }

  bookingInfo(element:any) {
    this.searchQuery = {
      from: this.selectedFrom, 
      to: this.selectedTo, 
      class: this.class, 
      children: this.children, 
      adults: this.adults, 
      departureDate: this.departureDate.value, 
      returnDate: this.trip == 'ONEWAY' ? null : this.returnDate.value,
      trip: this.trip,
      airline: element.airline
    }
    this.ticketBooikingService.setTicketSearchQuery(this.searchQuery);
    console.log(this.ticketBooikingService.getTicketSearchQuery());
  }

}

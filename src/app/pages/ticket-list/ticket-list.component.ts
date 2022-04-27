import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  displayedColumns: string[] = ['airline','departureTime','arrivalTime','price','seat'];
  dataSource: any;
  constructor() { }

  ngOnInit(): void {
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
            "price":300
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
            "price":300
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
            "price":300
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
            "price":300
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
            "price":300
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
            "price":300
        }
    ];
  }

}

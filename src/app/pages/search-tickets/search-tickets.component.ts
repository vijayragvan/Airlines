import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.scss']
})
export class SearchTicketsComponent implements OnInit {

  selectedFrom = 'MAA';
  selectedTo = 'BLR';
  numberOfPassangers = 1;
  campaignOne: FormGroup;
  campaignTwo: FormGroup;

  displayedColumns: string[] = ['airline','departureTime','arrivalTime','price','seat'];
  dataSource: any;

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.selectedFrom = params['from'];
      this.selectedTo = params['to'];
  });
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });
  }

  search(){
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
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketBooikingService } from 'src/app/service/ticket-booiking.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {
  requestDetails:any;
  children: { title: string; firstName: string; lastName: string; }[] = [];
  adults: { title: string; firstName: string; lastName: string; }[] = [];
  constructor(private ticketBooikingService: TicketBooikingService, private router: Router) {  }

  ngOnInit(): void {
    this.requestDetails = this.ticketBooikingService.getTicketSearchQuery();
    if(this.requestDetails){
      for(let i=0;i<Number(this.requestDetails.adults);i++){
        this.adults.push({title:"",firstName:"",lastName:""})
      }
      for(let i=0;i<Number(this.requestDetails.children);i++){
        this.children.push({title:"",firstName:"",lastName:""})
      }
      // this.adults = Array(Number(this.requestDetails.adults)).map((x,i)=>( {title:"",firstName:"",lastName:""}));
      // this.children = Array(Number(this.requestDetails.children)).map((x,i)=>( {title:"",firstName:"",lastName:""}));
      console.log(this.adults);
      console.log(this.children);
    } else {
      this.router.navigate(['/'], { });
    }

  }
  request(){
    console.log(this.adults);
      console.log(this.children);
  }

}

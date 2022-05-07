import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketBooikingService {

  searchQuery:any;
  constructor() { }

  setTicketSearchQuery(query:any){
    this.searchQuery = query;
  }
  getTicketSearchQuery(){
    return this.searchQuery;
  }
}

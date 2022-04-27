import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-upload',
  templateUrl: './ticket-upload.component.html',
  styleUrls: ['./ticket-upload.component.scss']
})
export class TicketUploadComponent implements OnInit {

 // Variable to store shortLink from api response
 shortLink: string = "";
 loading: boolean = false; // Flag variable
 public file: File | undefined; // Variable to store file

 // Inject service 
 constructor() { }

 ngOnInit(): void {
 }

 // On file Select
 onChange(event:any) {
  console.log(event);
     this.file = event.target.files[0];
 }

 // OnClick of button Upload
 onUpload() {
     this.loading = !this.loading;
     console.log(this.file);
 }

}

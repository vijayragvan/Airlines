import { Component, OnInit, ViewChild } from "@angular/core";
import { MatAccordion } from "@angular/material/expansion";
import {Router} from '@angular/router';

import { UsersService } from "../service/users.service";
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = [
    "user_name",
    "company_name",
    "role",
    "status",
    "action",
  ];
  dataSource: any;
  constructor(private userService: UsersService, private router:Router) {}
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion();
  editUser(data:any) {
    console.log("edit user",data);
    this.router.navigate(['/users/add'], { state: data });

  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((response) => {
      this.dataSource = response.result;
    });
  }
}

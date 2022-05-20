import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UsersService } from "../service/users.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  // addUserForm: FormGroup;
  

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {
    // console.log(this.router.getCurrentNavigation()); // should log out 'bar'

    // console.log("isUserAdd",this.isUserAdd)
  }
  extraRouterData = this.router.getCurrentNavigation()?.extras?.state
  userName = new FormControl(this.extraRouterData?.user_name);
  companyName = new FormControl(this.extraRouterData?.company_name);
  role = new FormControl(this.extraRouterData?.role);
  email = new FormControl(this.extraRouterData?.email);
  password = new FormControl(this.extraRouterData?.password);
  confirmPassword = new FormControl(this.extraRouterData?.password);
  status = new FormControl(this.extraRouterData?.status);
  mobileNumber = new FormControl(this.extraRouterData?.mobile_number);
  country = new FormControl(this.extraRouterData?.country);
  state = new FormControl(this.extraRouterData?.state);
  city = new FormControl(this.extraRouterData?.city);
  address = new FormControl(this.extraRouterData?.address);
  pinCode = new FormControl(this.extraRouterData?.pin_code);
  panNumber = new FormControl(this.extraRouterData?.pan_number);
  isUserAdd = !this.extraRouterData
  passwordHide = true;
  confirmPasswordHide = true;
  addUserForm = this.fb.group({
    userName:this.userName,
    companyName:this.companyName,
    role:this.role,
    email:this.email,
    password:this.password,
    confirmPassword:this.confirmPassword,
    status:this.status,
    mobileNumber:this.mobileNumber,
    country:this.country,
    state:this.state,
    city:this.city,
    address:this.address,
    pinCode:this.pinCode,
    panNumber:this.panNumber
  });
  addUser(){
    this.userService.addUsers(this.addUserForm.value).subscribe((response) => {
    console.log("add user",response);
  },error => {
        console.log(error.status);
  });
  }
  updateUser(){
    this.userService.updateUsers(this.addUserForm.value).subscribe((response) => {
      console.log("update user",response);
    },error => {
          console.log(error.status);
    });
  }
  onSubmit(): void {
    if(!this.isUserAdd){
      this.updateUser()
    }else{
      this.addUser()
    }

    this.router.navigate(['/users']);
  }
  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn() {

    const token = localStorage.getItem('token'); 

    // return token;
    return true;

  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}
  headers = {headers : {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
  }
}
  public getUsers(): Observable<any> {
    const url = "http://localhost:8000/api/";
    return this.http.get<any>(url+"users");
  }
  public addUsers(data:any): Observable<any> {
    console.log("service data",data);
    const url = "http://localhost:8000/api/";
    return this.http.post<any>(url+"users",data,this.headers);
  }
  public  updateUsers(data:any): Observable<any> {
    const url = "http://localhost:8000/api/";
    return this.http.put<any>(url+"users",data,this.headers);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';



    getUserData(){
      return this.http.get(this.apiUrl)
    }



}

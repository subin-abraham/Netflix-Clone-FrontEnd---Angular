import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private http:HttpClient) { }

  register(emailId: any, password: any){
    const data = {
      emailId,
      password,
    }
    return this.http.post('http://localhost:3000/register', data)

  }

}

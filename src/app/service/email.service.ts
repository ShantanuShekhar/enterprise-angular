import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl:string = 'http://localhost:8383/registry';

    constructor(private http:HttpClient) {  }
    sendEmail(data:any){
      return this.http.post(`${this.baseUrl}/test/sendEmail`,data,{ withCredentials: false }); 
  }
}

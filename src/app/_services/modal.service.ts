import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier'; // import NotifierService

@Injectable({  
  providedIn: 'root'  
})  
export class AlertService {  
   
  constructor(private http: HttpClient,private  notifier: NotifierService) { } 

  notify(type, message) {
    this.notifier.notify( type, message ); // call notification
  }
  
   
} 
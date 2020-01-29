import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
  
@Injectable({  
  providedIn: 'root'  
})  
export class UserService {  
  uri = environment.apiUrl;  
  constructor(private http: HttpClient) { } 

  login(email,password) {  
    console.log(email,password);  
    const obj = {  
        email,  
        password  
    };  
     return this.http.post(`${this.uri}/login`, obj);        
  }
  
  addUser(name,email,password,files) {  
    //console.log(name,email,password);  
      
    let formData = new FormData();
    if(files){
      for (var i = 0; i < files.length; i++) {
          formData.append("uploads[]", files[i], files[i].name);
      }
    }
    formData.append("name",name);
    formData.append("email",email);
    formData.append("password",password);
    console.log(formData);
    return this.http.post(`${this.uri}/addUser`, formData); 
          
  }  
  getUsers($e) {  
    const obj={pageNo:$e};
    return  this.http.post(`${this.uri}/users`,obj);  
  }  
  editUser(id) {
     const obj={};  
    return this.http.post(`${this.uri}/user/${id}`,obj);  
    } 
    
  

  updateUser(name,email,id) {  
    const obj = {  
      name,  
      email,
      id        
    };  
    console.log(obj,"Called");
    return this.http.post(`${this.uri}/updateUser`, obj);  
  } 


  

  deleteUser(id) {
    const obj={id};   
    return this.http.post(`${this.uri}/deleteUser`,obj);  
  } 

   fileupload(formData) {
     
    return formData;  
  } 
} 
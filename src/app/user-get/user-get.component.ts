import { Component, OnInit } from '@angular/core';  
import { UserService } from '../_services/user.service';
import { AlertService} from '../_services/alert.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {
  apiUrl = environment.apiUrl;
  page=1;
  count;
  users:[];  
  constructor(private ps: UserService, private alertService: AlertService) { } 

  ngOnInit() {  

   var token = localStorage.getItem('token');  
   this.getUser(1);
    
   }

   
   getUser($e){
    console.log($e);
    this.ps.getUsers($e).subscribe((data) => {
      console.log(data);
        if(data['data'] != null){
         this.users = data['data']; 
         this.count =data['count'];   
        }
      });

   }

   deleteUser(id) {  
    this.ps.deleteUser(id).subscribe(res => {  
      this.ps  
          .getUsers(1)  
          .subscribe(data => {  
            if(data['data']!= null){           
            this.users = data['data'];
            } 
        });
        this.alertService.notify('success','User deleted successfully'); 
    });  
  }
}







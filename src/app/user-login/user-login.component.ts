import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService} from '../_services/alert.service';
import { ActivatedRoute, Router } from '@angular/router'; 
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {  
  angForm: FormGroup; 
  user;token;
  constructor(private route: ActivatedRoute,private router: Router,private fb: FormBuilder, private ps: AuthenticationService, private alertService: AlertService) { 
     // redirect to home if already logged in
        if (this.ps.currentUserValue) { 
            this.router.navigate(['users']);
        } 
        this.createForm();  
  } 
  
  createForm() {  
    this.angForm = this.fb.group({  
      Email: ['', [Validators.required,Validators.email]], 
      Password: ['', Validators.required ]       
    });  
  }

  login(Email, Password) {
   this.ps.login(Email, Password)
   .subscribe((data) => {
    //console.log(data);
    if(data['data']!=null){
      this.alertService.notify('success','Logged in successfully.');
      this.user = data['data'][0];
      this.token = data['token'];      
      this.router.navigate(['users']);
    }else{
      this.alertService.notify('error','Please enter valid login details');
    }
    });
  }
  ngOnInit() {
  }

}

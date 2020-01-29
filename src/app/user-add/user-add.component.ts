import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';  
import { UserService } from '../_services/user.service';
import { AlertService} from '../_services/alert.service';
declare var require: any;
var v=require('../validator/custom_validator');


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit { 
  
  angForm: FormGroup;    
  uploadedFiles=null;
  constructor(private route: ActivatedRoute, private router: Router, private ps: UserService, private fb: FormBuilder, private alertService: AlertService) {  
      this.createForm();  
  }

  createForm() {  
    this.angForm = this.fb.group({  
      name: ['', [v.OnlyAlphabetAllowed,Validators.required]],  
      email: ['', [Validators.required,Validators.email]], 
      password: ['', Validators.required ]  
    });  
  } 

  ngOnInit() {
  }


 

 


  addUser(name,email,password) {  
    this.ps.addUser(name,email,password,this.uploadedFiles)
    .subscribe(res => {
      this.alertService.notify('success','User added successfully');
      this.router.navigate(['users']);
    },error=>console.log);
     
  }

  
fileChange(element) {
      this.uploadedFiles = element.target.files;
  }
  
  
  

}



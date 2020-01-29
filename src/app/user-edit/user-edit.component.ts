import { Component, OnInit } from '@angular/core';  
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';  
import { UserService } from '../_services/user.service';
import { AlertService} from '../_services/alert.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {  
  angForm: FormGroup;  
  user: any = {};  
  constructor(private route: ActivatedRoute, private router: Router, private ps: UserService, private fb: FormBuilder, private alertService: AlertService) {  
      this.createForm();  
 }  
  createForm() {  
    this.angForm = this.fb.group({  
      name: ['', Validators.required ],  
      email: ['', Validators.required ]  
    });  
  }  
  ngOnInit() {

  this.route.params.subscribe(params => {  
        this.ps.editUser(params['id'])

        .subscribe(res => {  
        console.log(res['data']);
         if(res['data']!=null){
          this.user = res['data'];  
          }
      });  
    });  
  } 

  updateUser(name,email,id) {  

    this.ps.updateUser(name,email,this.route.snapshot.params.id)
    .subscribe(res => {
      this.alertService.notify('success','User details updated successfully'); 
      this.router.navigate(['users']);
    },error=>console.log);
     
  } 
  
} 

// app-routing.module.ts  
import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router'; 
import { UserLoginComponent } from './user-login/user-login.component';
import { UserGetComponent } from './user-get/user-get.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AuthGuard } from './_helpers/auth.guard';
const routes: Routes = [  
  {  
    path: '',  
    component: UserLoginComponent
  },
  {  
    path: 'users',  
    component: UserGetComponent,
    canActivate: [AuthGuard]    
  },
  {  
    path: 'add-user',  
    component: UserAddComponent,
    canActivate: [AuthGuard]     
  },
  {  
    path: 'edit-user/:id',  
    component: UserEditComponent,
    canActivate: [AuthGuard]   
  },
  { path: '**', redirectTo: '' } 
];  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }
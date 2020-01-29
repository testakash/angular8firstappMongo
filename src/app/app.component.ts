import { Component,HostListener,ViewChild,TemplateRef} from '@angular/core';  
import { AuthenticationService } from './_services/authentication.service';
import { AlertService} from './_services/alert.service';
import { User } from './_models';
import { AppModalComponent } from './app-modal/app-modal.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {Event,Router} from '@angular/router';  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {
closeResult;
currentUser: User; 
  title = 'angular8tutorial'; 
  shouldShowLogoutMessage=false; 
  public lastActive:number=0;

@ViewChild('content',{static: false})
private content: TemplateRef<any>;

  constructor(private router: Router,
        private authenticationService: AuthenticationService,private  alertService: AlertService,
        private modalService: NgbModal) {          
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  @HostListener('document:mousemove') onMouseEnter() {
    this.lastActive = new Date().getTime();
  }

   @HostListener('document:keydown') onkeydown() {
    this.lastActive = new Date().getTime();
  }
  

  ngOnInit(){
    this.lastActive = new Date().getTime();
    console.log("Called - 1",this.lastActive);

    setInterval(()=>{

if(this.currentUser && this.shouldShowLogoutMessage==false){
    var isValid = parseInt(localStorage.getItem('validTill')) - new Date().getTime()>0?true:false;
    if(new Date().getTime() - this.lastActive>60*30*1000 || isValid==false ){
      this.shouldShowLogoutMessage = true;
      //this.logout();

     this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.shouldShowLogoutMessage = false;

      this.closeResult = `Closed with: ${result}`;
      console.log("Called - 7",this.closeResult);

    }, (reason) => {
      this.shouldShowLogoutMessage = false;

      this.closeResult = `Dismissed`;
      console.log("Called - 797987",this.closeResult);

    });


    }
    }

    },1000);


    setInterval(this.checkLoginStatus,1000,this);
  }

  checkLoginStatus(obj){
    
    
    var t1 = localStorage.getItem('validUntil');
  }

  

  logout() {

        this.authenticationService.logout();
        this.router.navigate(['/']);
        this.alertService.notify('success','Logout successfully'); 

    }
}





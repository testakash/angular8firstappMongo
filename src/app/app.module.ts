import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotifierModule } from 'angular-notifier';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';   
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserGetComponent } from './user-get/user-get.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';  
import { JwtInterceptor} from './_helpers/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppModalComponent } from './app-modal/app-modal.component';



@NgModule({
  declarations: [
    AppComponent,    
    UserLoginComponent,
    UserGetComponent,
    UserAddComponent,
    UserEditComponent,
    AppModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NotifierModule.withConfig({
              position: {
         
              horizontal: {
             
                /**
                 * Defines the horizontal position on the screen
                 * @type {'left' | 'middle' | 'right'}
                 */
                position: 'right',
             
                /**
                 * Defines the horizontal distance to the screen edge (in px)
                 * @type {number} 
                 */
                distance: 12
             
              },
         
          vertical: {
         
            /**
             * Defines the vertical position on the screen
             * @type {'top' | 'bottom'}
             */
            position: 'top',
         
            /**
             * Defines the vertical distance to the screen edge (in px)
             * @type {number} 
             */
            distance: 12,
         
            /**
             * Defines the vertical gap, existing between multiple notifications (in px)
             * @type {number} 
             */
            gap: 10
         
          }
         
        },

        behaviour: {
 
            /**
             * Defines whether each notification will hide itself automatically after a timeout passes
             * @type {number | false}
             */
            autoHide: 3000,
           
            /**
             * Defines what happens when someone clicks on a notification
             * @type {'hide' | false}
             */
            onClick: false,
           
            /**
             * Defines what happens when someone hovers over a notification
             * @type {'pauseAutoHide' | 'resetAutoHide' | false}
             */
            onMouseover: 'pauseAutoHide',
           
            /**
             * Defines whether the dismiss button is visible or not
             * @type {boolean} 
             */
            showDismissButton: true,
           
            /**
             * Defines whether multiple notification will be stacked, and how high the stack limit is
             * @type {number | false}
             */
            stacking: 4
           
          }
    })
    
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }              
        
    ],
 // providers: [ ProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

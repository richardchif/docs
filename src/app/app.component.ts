import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router' ;
import { ToastService } from 'ng-uikit-pro-standard';
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private router:Router,private toast: ToastService){} 
  title = 'edocs';
  sessionValue:string="";
  name:string;
  validatingForm: FormGroup;
  logout(){


  	sessionStorage.removeItem("second");
  	localStorage.removeItem("first");
    localStorage.removeItem("pass");
    localStorage.removeItem("order");
  	this.router.navigateByUrl('/login');
  }
  goToHome(){
    localStorage.removeItem("order");
    this.router.navigateByUrl('/home');
  }
   goToInternal(){
    this.router.navigateByUrl('/internal');
  }
   goToIssue(){
    this.router.navigateByUrl('/issue');
  }
   goToEd(){
    this.router.navigateByUrl('/');
  }
   goToEss(){
    this.router.navigateByUrl('/');
  }
   goToEmails(){
    this.router.navigateByUrl('/');
  }
    get modalFormAvatarPassword() {
    return this.validatingForm.get('modalFormAvatarPassword');
  }
  ngOnInit(){
        this.validatingForm = new FormGroup({
      modalFormAvatarPassword: new FormControl('', Validators.required)
    });
          this.sessionValue=localStorage.getItem("first");
      if(this.sessionValue==null){
        this.name="Login";
      }
      else{
        this.name="Logout";
      }
  }
}

import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import {Router, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RestapiService } from '../data/restapi.service';
import { FormsModule, FormGroup, Validators,FormControl } from '@angular/forms';
import { ToastService } from 'ng-uikit-pro-standard'

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {

  userData:declaredData[];
      declared =new declaredData();
      public in=[];
      en:string;
      sessionValue:string="";
      local:string="";
      public richy:string;
      localValue:string="";
      Em:string="";
       validatingForm: FormGroup;
      

  constructor(private restApi:RestapiService,private router:Router,private toast: ToastService) { }


    ngOnInit(): void {

          this.validatingForm = new FormGroup({
      modalFormAvatarPassword: new FormControl('', Validators.required)
    });

    	this.sessionValue=localStorage.getItem("first");
      this.local=sessionStorage.getItem("second");
      if(this.sessionValue==null){
        this.router.navigateByUrl('/login');
      }
      else{
        this.loadData();
      }
    

  }
      get modalFormAvatarPassword() {
    return this.validatingForm.get('modalFormAvatarPassword');
  }
  loadData(){
  	console.log(this.sessionValue+"  and  "+this.local);
    return this.restApi.getDataToIssue(this.sessionValue,this.local)
    .subscribe(data=>this.in=data);
  }
  goTOInternal(){
  	this.router.navigateByUrl('/internal');
  }
  goToP(){
  	this.router.navigateByUrl('/password');
  }
   goToPending(){
     this.go();
    this.router.navigateByUrl('/pending');
  }
     goToIssue(){
       this.go();
    this.router.navigateByUrl('/issue');
  }
   go(){
    sessionStorage.setItem("second",this.Em);
    this.localValue=sessionStorage.getItem("second");
    console.log("Department"+ this.Em);
    console.log("Session Dot "+this.localValue);
  }
  issue(key:string){
   return this.restApi.getIs(key)
    .subscribe(data=>this.richy=data);
  console.log(key);

}
  reject(key:string){
   return this.restApi.getReject(key)
    .subscribe(data=>this.richy=data);
  console.log(key);

}
verify(key:string){
  this.declared.ID_Key=key;
  console.log(this.declared);
  if (this.declared.ID_Key==this.declared.Order) {
    // code...
    sessionStorage.setItem("checkout",key);
    this.router.navigateByUrl('/loadingb');
  }
  else{
    setTimeout(
      ()=> this.toast.error('Order-number :'+this.declared.Order+ ' do not match the checked order ')
      );
  }
}

}

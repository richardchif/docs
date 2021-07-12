import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule, FormGroup, Validators,FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  userData:declaredData[];
      declared =new declaredData();
      public in=[];
      en:string;
      sessionValue:string="";
      local:string="";
      localValue:string="";
      Em:string="";
      validatingForm: FormGroup;
      

  constructor(private restApi:RestapiService,private router:Router) { }


    ngOnInit(): void {
          this.validatingForm = new FormGroup({
      modalFormAvatarPassword: new FormControl('', Validators.required)
    });
    	this.sessionValue=localStorage.getItem("first");
       this.local=sessionStorage.getItem("second");
       console.log("here in pending DPT:  "+this.local);
    this.loadData(this.local);

  }
    get modalFormAvatarPassword() {
    return this.validatingForm.get('modalFormAvatarPassword');
  }
  loadData(value:string){
  	console.log("Value chifango "+value);
    return this.restApi.getPendingData(this.sessionValue)
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

}

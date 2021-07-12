import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import { from } from 'rxjs';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-please2',
  templateUrl: './please2.component.html',
  styleUrls: ['./please2.component.scss']
})
export class Please2Component implements OnInit {

  userData:declaredData[];
  declared =new declaredData();
  constructor(private router:Router,private restApi:RestapiService) { }
  public push=[];
  sessionEmail:string="";
  sessionPass:string="";
  checkout:string="";

  ngOnInit(): void {
  	this.sessionEmail=localStorage.getItem("first"); 
  	this.sessionPass=localStorage.getItem("pass");
  	this.checkout=sessionStorage.getItem("checkout");
  	this.declared.Email=this.sessionEmail;
  	this.declared.Password=this.sessionPass;
  	console.log(this.declared);
  	setTimeout(()=>{
  		     return this.restApi.getIs(this.checkout)
    .subscribe(data=>this.router.navigateByUrl('/'+data));
  		
  	},
  	5000); 
  	
  }

}

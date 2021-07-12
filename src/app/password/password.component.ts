import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  
  userData:declaredData[];
      declared =new declaredData();
      public in=[];
      en:string;

  constructor(private restApi:RestapiService,private router:Router) { }

  ngOnInit(): void {
  }
        onClickChange(){
    console.log(this.declared);
         this.restApi.changePassword(this.declared)
          .subscribe(data => console.log("Succeeded, result = " + data), 
          (err)=> console.error("Failed! " + err));
          

  }

}

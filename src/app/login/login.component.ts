import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import { from } from 'rxjs';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   userData:declaredData[];
  declared =new declaredData();
  constructor(private router:Router,private restApi:RestapiService) { }
  public push=[];

  ngOnInit(): void {
 
  }
      onClickSubmit(){

         console.log(this.declared.Email);
         localStorage.setItem("first", this.declared.Email);
          localStorage.setItem("pass", this.declared.Password);
          this.router.navigateByUrl('/loadinga');

  }

}

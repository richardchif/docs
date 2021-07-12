import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import { from } from 'rxjs';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.scss']
})
export class InternalComponent implements OnInit {

   userData:declaredData[];
  declared =new declaredData();
  constructor(private router:Router,private restApi:RestapiService) { }
  public push=[];
        sessionValue:string="";
      localValue:string="";
      order1:string="";
      i:number;

      


  ngOnInit(): void {
          this.sessionValue=localStorage.getItem("first"); 
      if(this.sessionValue==null){
        this.router.navigateByUrl('/login');
      }
      else{
        this.declared.RequestedByEmail=this.sessionValue;
      }
  }
        onClickSubmit(){
    console.log(this.declared);
         this.restApi.add(this.declared)
          .subscribe(data => localStorage.setItem("order", JSON.stringify(data)), 
          (err)=> console.error("Failed! " + err));
          this.router.navigateByUrl('/loading');


         


      
          

  



}
}

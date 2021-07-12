import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import { from } from 'rxjs';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-internal-items',
  templateUrl: './internal-items.component.html',
  styleUrls: ['./internal-items.component.scss']
})
export class InternalItemsComponent implements OnInit {

     userData:declaredData[];
  declared =new declaredData();
  constructor(private router:Router,private restApi:RestapiService) { }
  public push=[];
        sessionValue:string="";
      localValue:string="";
      order:string="";
      s:string= '"';
      rw:any='';
      r:string;

  ngOnInit(): void {
  	          this.sessionValue=localStorage.getItem("first"); 
              this.order=localStorage.getItem("order"); 

      if(this.sessionValue==null){
        this.router.navigateByUrl('/login');
      }
      else{
      this.r=this.order.split(this.s).join(this.rw);
      console.log("Nicole "+this.r);

         this.declared.ID_Key=this.r;
         console.log("Nicole "+this.declared.ID_Key);

        
      }
  }
          onClickSubmit(){

             console.log("richy the new Id is"+this.order);
    console.log(this.declared);
         this.restApi.additems(this.declared)
          .subscribe(data => console.log("Succeeded, result = " + data), 
          (err)=> console.error("Failed! " + err));
          

  }
  goTointernal(){
      localStorage.removeItem("order");
  	this.router.navigateByUrl('/internal');
  }

}

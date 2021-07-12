import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import { from } from 'rxjs';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-please',
  templateUrl: './please.component.html',
  styleUrls: ['./please.component.scss']
})
export class PleaseComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  	setTimeout(()=>{
  		this.router.navigateByUrl('/internal-items');
  	},
  	5000);
  	
  }


}

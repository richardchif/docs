import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
import {InternalComponent} from './internal/internal.component';
import { PasswordComponent } from './password/password.component';
import { PasswordfComponent } from './passwordf/passwordf.component';
import { PendingComponent } from './pending/pending.component';
import { IssueComponent} from './issue/issue.component';
import { InternalItemsComponent } from './internal-items/internal-items.component';
import { PleaseComponent} from './please/please.component';
import { Please1Component} from './please1/please1.component';
import { Please2Component} from './please2/please2.component';


const routes: Routes = [
{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'home',component:RequestComponent},
{path:'internal',component:InternalComponent},
{path:'password',component:PasswordComponent},
{path:'passwordf',component:PasswordfComponent},
{path:'pending',component:PendingComponent},
{path:'issue',component:IssueComponent},
{path:'internal-items', component:InternalItemsComponent},
{path:'loading',component:PleaseComponent},
{path:'loadinga',component:Please1Component},
{path:'loadingb',component:Please2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

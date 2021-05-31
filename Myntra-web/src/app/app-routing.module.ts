import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { TermAndCondComponent } from './term-and-cond/term-and-cond.component';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path: "", component:MainpageComponent},
  {path:"term",component:TermAndCondComponent},
  {path:"login",component:LoginComponent},
  {path:"term/login",redirectTo:"/login", pathMatch:"full"},
  {path:"login/term",redirectTo:"/term", pathMatch:"full"},
  // {path:"login/login",redirectTo:"/login", pathMatch:"full"},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

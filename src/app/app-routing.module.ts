import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/Guard/auth.guard';
import { RoleGuard } from './shared/Guard/role.guard';


const routes: Routes = [
  {path:"",component:LoginComponent,},
  {
    path:"enroll",loadChildren:()=>import('./enroll/enroll.module').then((m)=>m.EnrollModule),canActivate:[AuthGuard]
  },
  {
    path:"institute",loadChildren:()=>import('./institute/institute.module').then((m)=>m.InstituteModule),canActivate:[AuthGuard]
  },

  {
    path:"course",loadChildren:()=>import('./course/course.module').then((m)=>m.CourseModule),canActivate:[AuthGuard]
  },
  {
    path:"users",loadChildren:()=>import('./users/users.module').then((m)=>m.UsersModule),canActivate:[RoleGuard]
  },
  {path:"login",component:LoginComponent},
  {path:"**",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

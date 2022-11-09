import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
 

  canActivate(){
     let Role  = sessionStorage.getItem("user");
     if(Role == "Admin"){
       return true;
     }
     //alert("You Dont have any admin rights");
    
     Swal.fire('Hey user!', 'You Dont have any admin rights', 'error');
    return false;
  }
  
}

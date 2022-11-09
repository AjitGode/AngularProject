import {   Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';




@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  
  canActivate(


    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    //return true;
    if(!!sessionStorage.getItem("user")){
      return true;

    }else{
      return false;
    }
    
  }
  
}

  




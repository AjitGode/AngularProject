import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalserviceService } from '../shared/services/globalservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userId:any;
  

  constructor(private _global:GlobalserviceService,private _router:Router) { }
 
  ngOnInit(): void {
  }

  get(){
   return sessionStorage.getItem("user");
  }
  
  signOut(){
    
     if(confirm('Are You Sure To logout')) {
     this._global.signOut(); 
     this._router.navigate(['/']);

    }
  }

}

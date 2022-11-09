import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalserviceService } from '../shared/services/globalservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId:any;
  userPass:any;
  userArray:any;

  constructor(private _globalSer:GlobalserviceService,private _router:Router) { }

  ngOnInit(): void {
    this._globalSer.signOut();
  }

  checkData(){
    //console.log(this.userId,"",this.userPass)
    this._globalSer.getRecord("user").subscribe((res)=>{
     this.userArray=res;
   const data= this.userArray.filter((item:any)=>{return item.empid==this.userId && item.password==this.userPass})
    if(data.length > 0){
      this._globalSer.signIn(this.userId)
      this._router.navigate(['/enroll/dashboard']);

    }else{
      //alert("Wrong Credential");
      Swal.fire('Hey user!', 'You have Enter Wrong Credential', 'warning');
      this.userId="";
      this.userPass="";
      
    }
  })
  }

}

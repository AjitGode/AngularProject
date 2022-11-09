import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {RegName} from 'src/app/shared/constant/data';
import { RegPass } from 'src/app/shared/constant/data';
import { RegCont } from 'src/app/shared/constant/data';
import { RegEmail } from 'src/app/shared/constant/data';
import { GlobalserviceService } from 'src/app/shared/services/globalservice.service';
import { UserSerService } from 'src/app/shared/services/user-ser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  userData:any;

  constructor(private router: Router,private _globalSer:GlobalserviceService,private _userSer:UserSerService) { }

  ngOnInit(): void {

    this.userData = new FormGroup({
      name: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]{3,30}")]),
      empid: new FormControl("",[Validators.required,]),
      password: new FormControl("",[Validators.required,Validators.pattern(RegPass)]),
      contact: new FormControl("",[Validators.required,Validators.pattern("[7-9]{1}[0-9]{9}")]),
      email: new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),

     
    })

  }

  getData(val:any){
    const userObj={

      empid:val.empid,
      name:val.name,
      password:val.password,
      contact:val.contact,
      email:val.email
     

    }

    this._userSer.addRecord(userObj).subscribe(()=>{
      Swal.fire('Hey user!', 'You have successfully added data', 'success');
      this.router.navigate(['/users/dashboard']); 
    })

  }

}

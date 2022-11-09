import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {RegName} from 'src/app/shared/constant/data';
import { RegPass } from 'src/app/shared/constant/data';
import { RegCont } from 'src/app/shared/constant/data';
import { RegEmail } from 'src/app/shared/constant/data';
import { GlobalserviceService } from 'src/app/shared/services/globalservice.service';
import { UserSerService } from 'src/app/shared/services/user-ser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:any;
  userData:any;
  userObj:any;

  constructor(private router: Router,private _actiRout:ActivatedRoute,private _globalSer:GlobalserviceService,private _userSer:UserSerService) { }

  ngOnInit(): void {

    this.userData = new FormGroup({
      name: new FormControl("",[Validators.required,Validators.pattern(RegName)]),
      empid: new FormControl("",[Validators.required,]),
      password: new FormControl("",[Validators.required,Validators.pattern(RegPass)]),
      contact: new FormControl("",[Validators.required,Validators.pattern(RegCont)]),
      email: new FormControl("",[Validators.required,Validators.pattern(RegEmail)]),

     
    })

    this._actiRout.paramMap.subscribe((para)=>{
      this.id =para.get('id');
      //console.log(this.id);
     this._userSer.getSingleRecord(this.id).subscribe((res)=>{
       this.userObj={...res};
       console.log(this.userObj);
     })
      })

  }

  getData(val:any){
    const userObj={
      id:this.id,
      empid:val.empid,
      name:val.name,
      password:val.password,
      contact:val.contact,
      email:val.email
     

    }

    this._userSer.updateRecord(userObj).subscribe(()=>{
      Swal.fire('Hey user!', 'You have successfully Updated data', 'success');
      this.router.navigate(['/users/dashboard']); 
    })

  }
}

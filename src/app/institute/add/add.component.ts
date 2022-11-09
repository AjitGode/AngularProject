import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {RegName} from 'src/app/shared/constant/data'
import {RegCont} from 'src/app/shared/constant/data'
import { GlobalserviceService } from 'src/app/shared/services/globalservice.service';
import { InstituteserService } from 'src/app/shared/services/instituteser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  instituteData:any;

  constructor(private router: Router,private _globalSer:GlobalserviceService,private _instituteSer:InstituteserService) { }

  ngOnInit(): void {
   
    this.instituteData = new FormGroup({
      branchname: new FormControl("",[Validators.required,Validators.pattern(RegName)]),
      contact: new FormControl("",[Validators.required,Validators.pattern(RegCont)]),
      city: new FormControl("",[Validators.required]),
     
    })

  }

  getData(val:any){
    const instituteObj={

      branchname:val.branchname,
      contact:val.contact,
      city:val.city,
     

    }

    this._instituteSer.addRecord(instituteObj).subscribe(()=>{
      Swal.fire('Hey user!', 'You have successfully added data', 'success');
      this.router.navigate(['/institute/dashboard']); 
    })

  }
}

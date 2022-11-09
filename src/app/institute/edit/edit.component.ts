import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {RegName} from 'src/app/shared/constant/data'
import {RegCont} from 'src/app/shared/constant/data'
import { GlobalserviceService } from 'src/app/shared/services/globalservice.service';
import { InstituteserService } from 'src/app/shared/services/instituteser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:any;
  instituteData:any;
  instituteObj:any;

  constructor(private router: Router,private _actiRout:ActivatedRoute,private _globalSer:GlobalserviceService,private _instituteSer:InstituteserService) { }

  ngOnInit(): void {

    this.instituteData = new FormGroup({
      branchname: new FormControl("",[Validators.required,Validators.pattern(RegName)]),
      contact: new FormControl("",[Validators.required,Validators.pattern(RegCont)]),
      city: new FormControl("",[Validators.required]),
     
    })

    this._actiRout.paramMap.subscribe((para)=>{
      this.id =para.get('id');
      //console.log(this.id);
     this._instituteSer.getSingleRecord(this.id).subscribe((res)=>{
       this.instituteObj={...res};
       console.log(this.instituteObj);
     })
      })
  }

  getData(val:any){
    const instituteObj={
      id:this.id,
      branchname:val.branchname,
      contact:val.contact,
      city:val.city,
     

    }
    
    this._instituteSer.updateRecord(instituteObj).subscribe(()=>{
      Swal.fire('Hey user!', 'You have successfully Updated data', 'success');
      this.router.navigate(['/institute/dashboard']); 
    })

  }

}

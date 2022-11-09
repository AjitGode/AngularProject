import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {RegName} from 'src/app/shared/constant/data'
import {RegCont} from 'src/app/shared/constant/data'
import {RegEmail} from 'src/app/shared/constant/data'
import { GlobalserviceService } from 'src/app/shared/services/globalservice.service';
import { EnrollserviceService } from 'src/app/shared/services/enrollservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:any;
  enrollData:any;
  enrollObj:any;
  appearing:any;
  completed:any;

  instituteArray:any;
  courseArray:any;

  showspecialization=false;
  showpassout=false;
  showinstitute=true;

  constructor( private router: Router,private _actiRout:ActivatedRoute,private _globalSer:GlobalserviceService,private _enrollSer:EnrollserviceService) { }

  ngOnInit(): void {

    this.fetchData();

    this.enrollData = new FormGroup({
      name: new FormControl("",[Validators.required,Validators.pattern(RegName)]),
      contact: new FormControl("",[Validators.required,Validators.pattern(RegCont)]),
      email: new FormControl("",[Validators.required,Validators.pattern(RegEmail)]),
      qualification: new FormControl("",[Validators.required]),
      specialization: new FormControl("",[Validators.required,Validators.pattern(RegName)]),
      appearing: new FormControl("",[Validators.requiredTrue]),
      //appearing1: new FormControl("",[Validators.requiredTrue]),
      passout: new FormControl("",[Validators.required]),
      college: new FormControl("",[Validators.required]),
      city: new FormControl("",[Validators.required]),
      workexp: new FormControl("",[Validators.required]),
      lighthouseStd:new FormControl("",[Validators.requiredTrue]),
      lighthouseBranch: new FormControl("",[Validators.required]),
      course:new FormControl("",[Validators.required]),
      reference:new FormControl("",[Validators.required]),
      batch: new FormControl("",[Validators.requiredTrue]),
    })
      
    this._actiRout.paramMap.subscribe((para)=>{
      this.id =para.get('id');
      //console.log(this.id);
     this._enrollSer.getSingleRecord(this.id).subscribe((res)=>{
       this.enrollObj={...res};
       console.log(this.enrollObj);
     })
      })

  }
  getData(val:any){
    const enrollObj={
      id:this.id,
      name:val.name,
      contact:val.contact,
      email:val.email,
      qualification:val.qualification,
      specialization:val.specialization,
      appearing:val.appearing,
      passout:val.passout,
      college:val.college,
      city:val.city,
      workexp:val.workexp,
      lighthouseStd:val.lighthouseStd,
      lighthouseBranch:val.lighthouseBranch,
      course:val.course,
      reference:val.reference,
      batch:val.batch

    }
    this._enrollSer.updateRecord(enrollObj).subscribe(()=>{
      Swal.fire('Hey user!', 'You have successfully Updated data', 'success');
      this.router.navigate(['/enroll/dashboard']); 
    })

}
fetchData(){
  // data access with global service
  this._globalSer.getRecord("institute").subscribe((res)=>{
    this.instituteArray=res;
    //console.log(this.enrollArray);
  })
  this._globalSer.getRecord("course").subscribe((res)=>{
      this.courseArray=res;
  })
}

toggleVisibility(event:any) {
  const selectedValue = event.target.value;
  if(selectedValue=="ssc"){
    this.showspecialization = false;
    
  }
  if(selectedValue=="hsc"){
    this.showspecialization = false;
  
  }
  if(selectedValue=="appearing"){
  this.showpassout = false;
  
  }else if(selectedValue=="completed"){
  
    this.showpassout = true;
  
  }
  if(selectedValue=="yes"){
    this.showinstitute = true;

  }else if(selectedValue=="no"){
    this.showinstitute = false;
  }
  
  else if(selectedValue=="bsc"){
     this.showspecialization = true;
    
  }else if(selectedValue=="bca"){
    this.showspecialization = true;

  }else if(selectedValue=="be"){
    this.showspecialization = true;
    
  }else if(selectedValue=="mca"){
    this.showspecialization = true;

  }else if(selectedValue=="msc"){
    this.showspecialization = true;

  }
}


}

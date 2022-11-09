
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {RegName} from 'src/app/shared/constant/data';
import {OnlyNumber} from 'src/app/shared/constant/data';
import { GlobalserviceService } from 'src/app/shared/services/globalservice.service';
import { CourseSerService } from 'src/app/shared/services/course-ser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   
  id:any;
  courseData:any;
  courseObj:any;
  constructor(private router: Router,private _actiRout:ActivatedRoute,private _globalSer:GlobalserviceService,private _courseSer:CourseSerService) { }

  ngOnInit(): void {

    this.courseData = new FormGroup({
      coursename: new FormControl("",[Validators.required,Validators.pattern(RegName)]),
      courseduration: new FormControl("",[Validators.required,]),
      coursefees: new FormControl("",[Validators.required,Validators.pattern(OnlyNumber)]),
     
    })
    
    this._actiRout.paramMap.subscribe((para)=>{
      this.id =para.get('id');
      //console.log(this.id);
     this._courseSer.getSingleRecord(this.id).subscribe((res)=>{
       this.courseObj={...res};
       console.log(this.courseObj);
     })
      })

  }

  getData(val:any){
    const courseObj={
      id:this.id,
      coursename:val.coursename,
      courseduration:val.courseduration,
      coursefees:val.coursefees,
     

    }
    
    this._courseSer.updateRecord(courseObj).subscribe(()=>{
      Swal.fire('Hey user!', 'You have successfully Updated data', 'success');
      this.router.navigate(['/course/dashboard']); 
    })

  }

}

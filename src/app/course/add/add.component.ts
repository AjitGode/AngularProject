import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {RegName} from 'src/app/shared/constant/data';
import {OnlyNumber} from 'src/app/shared/constant/data';
import { CourseSerService } from 'src/app/shared/services/course-ser.service';
import { GlobalserviceService } from 'src/app/shared/services/globalservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  courseData:any;

  constructor(private router: Router,private _globalSer:GlobalserviceService,private _courseSer:CourseSerService) { }

  ngOnInit(): void {
  
    this.courseData = new FormGroup({
      coursename: new FormControl("",[Validators.required,Validators.pattern(RegName)]),
      courseduration: new FormControl("",[Validators.required,]),
      coursefees: new FormControl("",[Validators.required,Validators.pattern(OnlyNumber)]),
     
    })

  }

  getData(val:any){
    const courseObj={

      coursename:val.coursename,
      courseduration:val.courseduration,
      coursefees:val.coursefees,
     

    }

    this._courseSer.addRecord(courseObj).subscribe(()=>{
      //alert("Data Added Successfully");
      Swal.fire('Hey user!', 'You have successfully added data', 'success');
      this.router.navigate(['/course/dashboard']); 
    })

  }

}

import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CourseSerService } from 'src/app/shared/services/course-ser.service';
import { GlobalserviceService } from 'src/app/shared/services/globalservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  modalRef?: BsModalRef;
  courseArray:any;

  constructor(private modalService: BsModalService,private _courseSer:CourseSerService,private _globalSer:GlobalserviceService) { }

  p:number=1;
  search:string="";
  order:string="name";
  reverse:boolean=false;

  ngOnInit(): void {
    this.fetchData();
  }

   //open popup modal
   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  
  fetchData(){
    // data access with global service
    this._globalSer.getRecord("course").subscribe((res)=>{
      this.courseArray=res;
      console.log(this.courseArray);
    })
 }

 getId(id:any){
  if(confirm(`Are you sure to delete record with id:${id}`)){
   this._courseSer.deleteRecord(id).subscribe(()=>{
    Swal.fire('Hey user!', 'You have successfully Deleted data', 'success');
       this.fetchData();
   })

  }
 }
 changeOrder(){
   this.reverse=!this.reverse;
 }

}

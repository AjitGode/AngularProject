import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GlobalserviceService } from 'src/app/shared/services/globalservice.service';
import { InstituteserService } from 'src/app/shared/services/instituteser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  modalRef?: BsModalRef;
  instituteArray:any;

  constructor(private _instituteSer:InstituteserService,private _globalSer:GlobalserviceService,private modalService: BsModalService) { }
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
    this._globalSer.getRecord("institute").subscribe((res)=>{
      this.instituteArray=res;
      console.log(this.instituteArray);
    })
 }

 getId(id:any){
  if(confirm(`Are you sure to delete record with id:${id}`)){
   this._instituteSer.deleteRecord(id).subscribe(()=>{
    Swal.fire('Hey user!', 'You have successfully Deleted data', 'success');
       this.fetchData();
   })

  }
 }
 changeOrder(){
   this.reverse=!this.reverse;
 }

}

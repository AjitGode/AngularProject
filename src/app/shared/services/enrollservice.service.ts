import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollserviceService {

  baseUrl:string="http://localhost:3000/enrollment";
  constructor(private _http:HttpClient) { }

  //get Record
  getRecord(path:string){
    const url:string=`${this.baseUrl}/${path}`;
   return this._http.get(url);
 }

  //delete Records
  deleteRecord(id:any){
    let url=`${this.baseUrl}/${id}`
    return this._http.delete(url);
  }

  //Add Record
  addRecord(enroll:any){

    return this._http.post(this.baseUrl,enroll)
   }

   //get Single record
  getSingleRecord(id:any){
    let url = `${this.baseUrl}/${id}`; 
    return this._http.get(url);
  }
  //update record
  updateRecord(enrollObj:any){
    let url = `${this.baseUrl}/${enrollObj.id}`; 
    return this._http.put(url,enrollObj);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstituteserService {

  baseUrl:string="http://localhost:3000/institute";
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
 addRecord(institute:any){

  return this._http.post(this.baseUrl,institute)
 }

  //get Single record
  getSingleRecord(id:any){
    let url = `${this.baseUrl}/${id}`; 
    return this._http.get(url);
  }
  //update record
  updateRecord(instituteObj:any){
    let url = `${this.baseUrl}/${instituteObj.id}`; 
    return this._http.put(url,instituteObj);
  }
}

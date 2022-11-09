import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseSerService {

  baseUrl:string="http://localhost:3000/course";

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
 addRecord(course:any){

  return this._http.post(this.baseUrl,course)
 }

  //get Single record
  getSingleRecord(id:any){
    let url = `${this.baseUrl}/${id}`; 
    return this._http.get(url);
  }
  //update record
  updateRecord(courseObj:any){
    let url = `${this.baseUrl}/${courseObj.id}`; 
    return this._http.put(url,courseObj);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  enroll:any;
  baseUrl:string="http://localhost:3000";
  constructor(private _http:HttpClient) { }

  //get Record
  getRecord(path:string){
    const url:string=`${this.baseUrl}/${path}`;
   return this._http.get(url);
 }

  //delete Records
  deleteRecord(id:any){
    let url=`${this.baseUrl}/${id}`;
    return this._http.delete(url);
  }

  //Add Record
  addRecord(path:string,enroll:any){
    let url=`${this.baseUrl}/${path}`;
    return this._http.post(url,enroll)
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
   //sign in mehod
   signIn(user:any){
    sessionStorage.setItem("user",user);
    
  }

  //current User
  currentUser(){
    sessionStorage.getItem("user")
  }

  //signOut method
  signOut(){
    sessionStorage.removeItem("user");
  }

}

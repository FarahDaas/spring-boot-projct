import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }
  Getallmedcin(){
    return this.http.get('http://localhost:8181/getallmedcin')
  }
  AddMedcin(profile:any){
  return this.http.post('http://localhost:8181/savemedcin',profile)
  }
  DeleteMedcin(id:any){
    return this.http.delete('http://localhost:8181/deletemedcin'+id)
  }

}


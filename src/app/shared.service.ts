import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl: string = ""

  constructor(private http: HttpClient) { 
    this.baseUrl = "http://localhost:65251/api/";
  }

  readDatalist():Observable<any[]>{
    return this.http.get<any>(this.baseUrl+"Employee");
  }

  addData(val: any){
    return this.http.post(this.baseUrl+"Employee",val);
  }

  updateData(val: any){
    return this.http.put(this.baseUrl+"Employee",val);
  }

  deleteData(val: any){
    return this.http.delete(this.baseUrl+"Employee/"+val);
  }
}

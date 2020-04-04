import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProvince } from '../modals/province';
@Injectable({
  providedIn: 'root'
})
export class QuarantineeService {

  private quarantineesurl: string = "http://localhost:8000/api/quarantinees";
  private provincesurl: string = "http://localhost:8000/api/provinces";
  constructor( private http: HttpClient) {

   }

   addQuarantinee(name,age){
     let params = {
        name:name,
        age:age
     }
     return this.http.post(`${this.quarantineesurl}`,params);
   }

   getProvinces():Observable<IProvince[]>{
     return this.http.get<IProvince[]>(`${this.provincesurl}`);
   }
}

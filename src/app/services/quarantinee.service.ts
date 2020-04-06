import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { IProvince } from '../modals/province';
import { IDistrict } from '../modals/district';
import { IGn } from '../modals/gn';

@Injectable({
  providedIn: 'root'
})
export class QuarantineeService {

  private quarantineesurl: string = "https://the-fulcrum-273413.appspot.com/api/quarantinees";
  private provincesurl: string = "https://the-fulcrum-273413.appspot.com/api/provinces";
  private districturl: string = "https://the-fulcrum-273413.appspot.com/api/districts";
  private gnurl: string = "https://the-fulcrum-273413.appspot.com/api/gns";

  constructor( private http: HttpClient) {

   }

   addQuarantinee(name,nic,age,tel,address,province,district,gn,phi,band,gps,startdate,enddate,hasMoved){
     let params = {
        name:name,
        nic:nic,
        age:age,
        tel:tel,
        address:address,
        province:province,
        district:district,
        gn:gn,
        phi:phi,
        band:band,
        gps:gps,
        startdate:startdate,
        enddate:enddate,
        hasMoved:hasMoved
     }
     return this.http.post(`${this.quarantineesurl}`,params);
   }

   getProvinces():Observable<IProvince[]>{
     return this.http.get<IProvince[]>(`${this.provincesurl}`);
   }

   getDistricts():Observable<IDistrict[]>{
      return this.http.get<IDistrict[]>(`${this.districturl}`);
   }

   getGns():Observable<IGn[]>{
     return this.http.get<IGn[]>(`${this.gnurl}`);
   }

   filterQuarantinees(id){
     return this.http.get(`${this.quarantineesurl}/`+id);
   }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuarantineeService } from '../services/quarantinee.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { AddForQuarantine } from '../modals/quarantinee';

@Component({
  selector: 'app-new-quarantinee',
  templateUrl: './new-quarantinee.component.html',
  styleUrls: ['./new-quarantinee.component.css']
})
export class NewQuarantineeComponent implements OnInit {

  public quarantineeForm: FormGroup;
  provinces: any
  districts: any;
  gns: any;
  gnds: any;
  phis: any;
  phios: any;
  hasMoved: any;
  location: any;
  constructor(private router: Router, private quarantineeService: QuarantineeService) {

    this.findMe();

    this.quarantineeService.getProvinces().subscribe((data: any) => {
      this.provinces = data[0];
    }, (error:any) => {
      console.log(error);
    });

    this.quarantineeService.getDistricts().subscribe((data: any) => {
      this.gns = data[0];
    }, (error:any) => {
      console.log(error);
    });

    this.quarantineeService.getGns().subscribe((data: any) => {
      this.phis = data[0];
    }, (error:any) => {
      console.log(error);
    });
    
    this.hasMoved = false;
   }

  ngOnInit() {
    this.quarantineeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      nic: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      gn: new FormControl('', [Validators.required]),
      phi: new FormControl('', [Validators.required]),
      band: new FormControl('', [Validators.required]),
      gps: new FormControl(''),
      startdate: new FormControl('', [Validators.required]),
      enddate: new FormControl('', [Validators.required])
    });
  }

  public newQuarantinee = (quarantineeFormValue) => {
    if(this.quarantineeForm.valid) {
      this.addNew(quarantineeFormValue);
    }
  }

    addNew = (quarantineeFormValue) => {
    let quarantinee: AddForQuarantine = {
      name: quarantineeFormValue.name,
      nic: quarantineeFormValue.nic,
      age: quarantineeFormValue.age,
      tel: quarantineeFormValue.tel,
      address: quarantineeFormValue.address,
      province: quarantineeFormValue.province,
      district: quarantineeFormValue.district,
      gn: quarantineeFormValue.gn,
      phi: quarantineeFormValue.phi,
      band: quarantineeFormValue.band,
      gps: this.location,
      startdate: quarantineeFormValue.startdate,
      enddate: quarantineeFormValue.enddate,
      hasMoved: this.hasMoved
    }

    console.log(quarantinee);
    this.quarantineeService.addQuarantinee(
      quarantineeFormValue.name,
      quarantineeFormValue.nic,
      quarantineeFormValue.age,
      quarantineeFormValue.tel,
      quarantineeFormValue.address,
      quarantineeFormValue.province,
      quarantineeFormValue.district,
      quarantineeFormValue.gn,
      quarantineeFormValue.phi,
      quarantineeFormValue.band,
      this.location,
      quarantineeFormValue.startdate,
      quarantineeFormValue.enddate,
      this.hasMoved
      
    ).subscribe((data: any) => {
      this.router.navigate(['/dashboard',localStorage.getItem('id')]);
    },(error: any) => {
      alert("Something went wrong!!");
    });
  }

  changeProvince(event){
    let province = event.value;
    console.log("Province",province)
    this.districts = this.provinces[province];
    
    
  }

  changeDistrict(event){
    let district = event.value;
    console.log("Distrct",district);
    this.gnds = this.gns[district];
  }

  changeGn(event){
    let gn = event.value;
    console.log("GN",gn);
    this.phios = this.phis[gn];

  }

  findMe(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        this.location = String(position.coords.latitude)+";"+String(position.coords.longitude)
        console.log("current location",this.location);
      })
    }
  }
}

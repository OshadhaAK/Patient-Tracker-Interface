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
  constructor(private router: Router, private quarantineeService: QuarantineeService) {

    this.provinces = {"centralProvince": ['a','b','c','d','e'], "sabaragamuwaProvince": ['q','w','r','t']};
    this.gns = {"q": ['g1','g2','g3'], "w": ['g4','g5','g6','g7'], "r": ['g8','g9','g10','g11'], "t": ['g12','g13','g14','g15']};
    this.phis = {"g1": ['p1','p2'],"g2": ['p3','p4','p5','p6'], "g3": ['p7','p8','p9','p10','p11','p12','p13','p14','p15'], "g4": ['p16','p17','p18','p19','p20']};

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
      gps: new FormControl('', [Validators.required]),
      startdate: new FormControl('', [Validators.required]),
      enddate: new FormControl('', [Validators.required])
    });
  }

  public newQuarantinee = (quarantineeFormValue) => {
    if(this.quarantineeForm.valid) {
      this.addNew(quarantineeFormValue);
    }
  }

  private addNew = (quarantineeFormValue) => {
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
      gps: quarantineeFormValue.gps,
      startdate: quarantineeFormValue.startdate,
      enddate: quarantineeFormValue.enddate
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
      quarantineeFormValue.gps,
      quarantineeFormValue.startdate,
      quarantineeFormValue.enddate
      
    ).subscribe((data: any) => {
      this.router.navigate(['/dashboard',"os"]);
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
}

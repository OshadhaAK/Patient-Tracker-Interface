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

  constructor(private router: Router, private quarantineeService: QuarantineeService) {

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

}

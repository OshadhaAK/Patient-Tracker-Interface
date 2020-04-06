import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuarantineeService } from '../services/quarantinee.service';

@Component({
  selector: 'app-view-quarantinees',
  templateUrl: './view-quarantinees.component.html',
  styleUrls: ['./view-quarantinees.component.css']
})
export class ViewQuarantineesComponent implements OnInit {
  panelOpenState = false;
  quarantineName: any;
  location: any;
  startDate: any;
  endDate: any;
  status: any;
  quarantinees: any;
  hasMoved: any;
  constructor(private router: Router, private quarantineeService: QuarantineeService ) { 

    


  }

  ngOnInit() {
    
  }

  search(id){
    this.quarantineeService.filterQuarantinees(id).subscribe((data: any) => {
      console.log(data);
      this.quarantinees = data;
    })
  }

}

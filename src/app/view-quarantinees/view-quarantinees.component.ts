import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.quarantineName = "Oshadha"
    this.location = false;
    this.startDate = '01/04/2020';
    this.endDate = '14/04/2020';
  }

}
